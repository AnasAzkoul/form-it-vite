import { WidgetTypes } from '@/lib/types';

export interface DroppableStateType {
  widgets: WidgetTypes[];
}

export enum LocalStorageItems {
  Widgets = 'widgets',
}
