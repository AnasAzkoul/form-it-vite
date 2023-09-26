import {
  MultipleChoiceQuestionType,
  QuestionWithTextBoxType,
  YesNoQuestionType,
  WidgetVariantsType,
  WidgetTypes,
} from '@/lib/types';

import {
  MultipleChoiceQuestion,
  QuestionWithTextBox,
  YesNoQuestion
} from '@/lib/widgetClasses';


const generateWidgetData = (variant: WidgetVariantsType) => {
  if (variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION) {
    return new MultipleChoiceQuestion();
  } else if (variant === WidgetVariantsType.YES_NO_QUESTION) {
    return new YesNoQuestion();
  } else if (variant === WidgetVariantsType.QUESTION_WITH_TEXT_BOX) {
    return new QuestionWithTextBox();
  }
};

export const handleOnDragStart = (
  e: React.DragEvent,
  widgetVariant: WidgetVariantsType
) => {
  const widgetData: WidgetTypes = generateWidgetData(widgetVariant) as
    | MultipleChoiceQuestionType
    | YesNoQuestionType
    | QuestionWithTextBoxType;
  e.dataTransfer.setData('text/plain', JSON.stringify(widgetData));
};
