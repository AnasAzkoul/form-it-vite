import { ComponentProps } from 'react';
import { Input } from '@/components/ui/input';

interface Props extends ComponentProps<typeof Input> {
  id: string;
}

const OptionInput = ({ value, name, onChange, ...props }: Props) => {
  return (
    <div className='flex items-center gap-2 relative group'>
      <Input
        type='text'
        placeholder='write your option here'
        className='border-transparent border-b-gray-300 rounded-none placeholder:text-gray-400 focus-visible:ring-0'
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
    </div>
  );
};

export default OptionInput;
