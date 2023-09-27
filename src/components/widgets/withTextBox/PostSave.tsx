import {WidgetTypes, QuestionWithTextBoxType} from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { useDroppableSlice } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  widget: WidgetTypes
}

const PostSave = ({widget}: Props) => {
  const {dispatch, editWidgetData} = useDroppableSlice()

  return (
    <Card className='bg-primary text-input border-none'>
      <CardHeader>
        <CardTitle>{widget.widgetQuestion}</CardTitle>
        <CardDescription>
          Please answer the question in the text box below.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <Textarea placeholder='Please fill in your answer here' className='border-gray-300'/>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button
          type='button'
          onClick={() => dispatch(editWidgetData(widget.id))}
          variant='secondary'
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostSave
