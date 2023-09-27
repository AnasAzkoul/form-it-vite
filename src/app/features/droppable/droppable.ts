import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { DroppableStateType } from './types';
import { WidgetTypes, WidgetVariantsType } from '@/lib/types';
import { MultipleChoiceQuestion } from '@/lib/widgetClasses';

const validateQuestion = (question: string): boolean => {
  if (question.length < 10) {
    return false;
  } else {
    return true;
  }
};

const validateMultipleChoiceQuestion = (widget: WidgetTypes): boolean => {
  let isAllValid = false;
  const { choices, widgetQuestion } = widget as MultipleChoiceQuestion;

  const isQuestionValid = validateQuestion(widgetQuestion);
  if (isQuestionValid === true) {
    isAllValid = choices.every((choice) => choice.label.length > 4);
  }

  return isAllValid;
};

export const initialState: DroppableStateType = {
  widgets: [],
};

export const droppableSlice = createSlice({
  name: 'droppable',
  initialState,
  reducers: {
    addNewWidget: (state, action: PayloadAction<WidgetTypes>) => {
      state.widgets.push(action.payload);
    },
    updateQuestionInputValue: (
      state,
      action: PayloadAction<{ id: string; questionValue: string }>
    ) => {
      state.widgets.map((widget) => {
        if (widget.id === action.payload.id) {
          widget.widgetQuestion = action.payload.questionValue;
        }
      });
    },
    deleteWidget: (state, action: PayloadAction<string>) => {
      const filteredWidgets = state.widgets.filter(
        (widget) => widget.id !== action.payload
      );
      state.widgets = filteredWidgets;
    },
    addNewOptionToQuestion: (state, action: PayloadAction<string>) => {
      state.widgets.forEach((widget) => {
        if (
          widget.id === action.payload &&
          widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION
        ) {
          const newChoice = { id: uuid(), label: '' };
          widget.choices.push(newChoice);
        }
      });
    },
    deleteOption: (state, action: PayloadAction<string>) => {
      state.widgets.forEach((widget) => {
        if (
          widget.id === action.payload &&
          widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION
        ) {
          widget.choices.pop();
        }
      });
    },
    updateOptionsValue: (
      state,
      action: PayloadAction<{ id: string; labelValue: string }>
    ) => {
      state.widgets.map((widget) => {
        if (widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION) {
          widget.choices.map((choice) => {
            if (choice.id === action.payload.id) {
              choice.label = action.payload.labelValue;
            }
          });
        }
      });
    },
    saveWidgetData: (state, action: PayloadAction<string>) => {
      state.widgets.forEach((widget) => {
        if (
          widget.id === action.payload &&
          widget.variant !== WidgetVariantsType.MULTIPLE_CHOICE_QUESTION
        ) {
          const isQuestionValid = validateQuestion(widget.widgetQuestion);
          if (isQuestionValid === false) {
            widget.isError = true;
            widget.errMessage = 'Please fill in all the inputs before you save';
          } else {
            widget.isSaved = true;
          }
        } else if (
          widget.id === action.payload &&
          widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION
        ) {
          const isMCQValid = validateMultipleChoiceQuestion(widget);
          if (isMCQValid === false) {
            widget.isError = true;
            widget.errMessage = 'Please fill in all the inputs before you save';
          } else {
            widget.isError = false;
            widget.isSaved = true;
          }
        }
      });
    },
    editWidgetData: (state, action: PayloadAction<string>) => {
      state.widgets.forEach((widget) => {
        if (widget.id === action.payload) {
          widget.isSaved = false;
        }
      });
    },
  },
});

export const {
  addNewOptionToQuestion,
  addNewWidget,
  deleteWidget,
  deleteOption,
  editWidgetData,
  saveWidgetData,
  updateOptionsValue,
  updateQuestionInputValue,
} = droppableSlice.actions;

export default droppableSlice.reducer;
