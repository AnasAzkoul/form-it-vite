import { handleOnDragStart } from './helpers';
import { WidgetMenuItemType } from './types';
import Icon from '@/components/icons';

type Props = {
  widget: WidgetMenuItemType;
};

const DraggableWidget = ({ widget }: Props) => {
  return (
    <span
      className='flex items-center gap-2 px-5 py-2 capitalize rounded-lg hover:bg-slate-600 cursor-move'
      draggable
      onDragStart={(e) => handleOnDragStart(e, widget.variant)}
    >
      <span className='text-xs tracking-widest text-primary'>
        {widget.variant}
      </span>
      <Icon.Drag />
    </span>
  );
};

export default DraggableWidget;
