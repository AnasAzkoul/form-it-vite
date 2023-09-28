import { useDroppableSlice } from '@/app/hooks';
import { WidgetTypes } from '@/lib/types';

export const useWidgetActions = (widget: WidgetTypes) => {
  const { dispatch, saveWidgetData, updateQuestionInputValue } =
    useDroppableSlice();

  const handleUpdateQuestionValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const payload = {
      id: widget.id,
      questionValue: e.target.value,
    };

    dispatch(updateQuestionInputValue(payload));
  };

  const handleSaveWidgetData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveWidgetData(widget.id));
  };


  return {
    handleSaveWidgetData,
    handleUpdateQuestionValue,
  }
};
