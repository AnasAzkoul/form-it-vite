import { configureStore } from '@reduxjs/toolkit';
import droppableReducers from './features/droppable/droppable';
import { LocalStorageItems } from './features/droppable/types';

const preloadedState =
  JSON.parse(localStorage.getItem(LocalStorageItems.Widgets) as string) || [];

export const store = configureStore({
  reducer: {
    droppable: droppableReducers,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem(LocalStorageItems.Widgets, serializedState);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
