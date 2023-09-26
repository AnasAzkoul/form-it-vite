import { Button } from '../../ui/button';
import { WidgetTypes, WidgetVariantsType } from '@/lib/types';
import { useDroppableSlice } from '@/app/hooks';
import CloseIcon from '../../icons/Close';

interface WidgetControlPanelProps {
  widget: WidgetTypes;
}

const WidgetControlPanel = ({ widget }: WidgetControlPanelProps) => {
  const { dispatch, deleteWidget, addNewOptionToQuestion, deleteOption } =
    useDroppableSlice();

  return (
    <>
      <div className='flex items-center justify-end gap-2'>
        {widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION && (
          <>
            <Button
              variant={'outline'}
              onClick={() => dispatch(addNewOptionToQuestion(widget.id))}
              type='button'
              className='text-xs'
              disabled={widget.choices.length > 5}
            >
              Add option
            </Button>
            <Button
              variant={'outline'}
              onClick={() => dispatch(deleteOption(widget.id))}
              type='button'
              disabled={widget.choices.length <= 2}
              className='text-xs'
            >
              Delete option
            </Button>
          </>
        )}

        <Button
          onClick={() => dispatch(deleteWidget(widget.id))}
          className='bg-red-600 hover:bg-red-800 text-xs p-1'
          size='icon'
          type='button'
        >
          <CloseIcon />
        </Button>
      </div>
    </>
  );
};

export default WidgetControlPanel;
