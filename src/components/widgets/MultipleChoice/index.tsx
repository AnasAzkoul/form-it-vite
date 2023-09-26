import { Props } from './types';
import PreSaveMCQ from './PreSaveMCQ';
import PostSaveMCQ from './PostSaveMCQ';

function MultipleChoiceQuestion({ widget }: Props) {
  return (
    <>
      {widget.isSaved ? (
        <PostSaveMCQ widget={widget} />
      ) : (
        <PreSaveMCQ widget={widget} />
      )}
    </>
  );
}

export default MultipleChoiceQuestion;
