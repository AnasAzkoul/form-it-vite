import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { DroppableStateType, LocalStorageItems } from './types';
import {
  SaveWidgetPayloadType,
  WidgetTypes,
  WidgetVariantsType,
} from '@/lib/types';
import {OptionsInputType} from '@/components/widgets/MultipleChoice/types';

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
    updateOptionsValue: (state, action: PayloadAction<{id: string, labelValue: string}>) => {
      state.widgets.map(widget => {
        if(widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION) {
          widget.choices.map(choice => {
            if(choice.id === action.payload.id) {
              choice.label = action.payload.labelValue
            }
          })
        }
      })
    },
    saveWidgetData: (state, action: PayloadAction<SaveWidgetPayloadType>) => {
      const serializedLocalState = localStorage.getItem(
        LocalStorageItems.Widgets
      );

      state.widgets.forEach((widget) => {
        if (widget.id === action.payload.id) {
          widget.isSaved = true;
          widget.widgetQuestion = action.payload.widgetQuestion;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // widget.choices = action.payload.choices;
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
  updateOptionsValue
} = droppableSlice.actions;

export default droppableSlice.reducer;
