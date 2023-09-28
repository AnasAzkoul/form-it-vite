import { ComponentProps } from 'react';
import { Input } from '../../ui/input';

interface Props extends ComponentProps<typeof Input> {}

const QuestionInput = ({ value, ...props }: Props) => {
  return (
    <Input
      className='border-transparent border-b-gray-300 rounded-none placeholder:text-gray-400 focus-visible:ring-0 w-2/3'
      type='text'
      value={value}
      placeholder='write your question here'
      {...props}
    />
  );
};

export default QuestionInput;
