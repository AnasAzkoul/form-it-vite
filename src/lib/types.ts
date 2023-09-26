export enum WidgetVariantsType {
  MULTIPLE_CHOICE_QUESTION = 'multiple choice question',
  YES_NO_QUESTION = 'yes/no question',
  QUESTION_WITH_TEXT_BOX = 'question with text box',
}

export interface ChoiceType {
  id: string;
  label: string;
}

export interface BaseWidgetType {
  id: string;
  widgetQuestion: string;
  isSaved: boolean;
}

export interface MultipleChoiceQuestionType extends BaseWidgetType {
  variant: WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
  choices: ChoiceType[];
}

export interface YesNoQuestionType extends BaseWidgetType {
  variant: WidgetVariantsType.YES_NO_QUESTION;
  choice: [ChoiceType, ChoiceType];
}

export interface QuestionWithTextBoxType extends BaseWidgetType {
  variant: WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
  answer: string;
}

export type WidgetTypes =
  | MultipleChoiceQuestionType
  | YesNoQuestionType
  | QuestionWithTextBoxType;

export type SaveWidgetPayloadType = {
  id: string;
  widgetQuestion: string;
  choices: ChoiceType[];
};


