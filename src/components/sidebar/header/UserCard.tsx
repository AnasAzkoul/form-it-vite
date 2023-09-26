import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserCard = () => {
  return (
    <Card className='bg-slate-800 border-none pb-0 mt-2'>
      <CardContent className='flex justify-start items-center gap-3 text-gray-200 pb-0 py-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src='public/200px.jpeg' />
          <AvatarFallback className='text-slate-800'>AA</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <span className='text-base'>Anas Azkoul</span>
          <span className='text-xs'>English Teacher</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
