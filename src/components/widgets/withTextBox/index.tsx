import { WidgetTypes } from '@/lib/types';
import PreSave from './PreSave';
import PostSave from './PostSave';

type Props = {
  widget: WidgetTypes;
};

const QuestionWithTextBox = ({ widget }: Props) => {
  return (
    <>
      {widget.isSaved ? (
        <PostSave widget={widget} />
      ) : (
        <PreSave widget={widget} />
      )}
    </>
  );
};

export default QuestionWithTextBox;
