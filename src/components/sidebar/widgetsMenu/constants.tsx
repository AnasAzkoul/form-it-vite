import { WidgetMenuItemType } from './types';
import { WidgetVariantsType } from '@/lib/types';

export const widgetMenuItems: WidgetMenuItemType[] = [
  { variant: WidgetVariantsType.MULTIPLE_CHOICE_QUESTION },
  { variant: WidgetVariantsType.QUESTION_WITH_TEXT_BOX },
  { variant: WidgetVariantsType.YES_NO_QUESTION },
];
