import { WidgetTypes, QuestionWithTextBoxType } from '@/lib/types';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WidgetControlPanel from '../ui/WidgetControlPanel';
import { Textarea } from '@/components/ui/textarea';
import QuestionInput from '../ui/QuestionInput';
import { useWidgetActions } from '../hooks';

type Props = {
  widget: WidgetTypes;
};

const PreSave = ({ widget }: Props) => {
  const {handleSaveWidgetData, handleUpdateQuestionValue} = useWidgetActions(widget)

  return (
    <Card className='bg-primary text-input border-none'>
      <CardHeader>
        <CardTitle className='capitalize'>{widget.variant}</CardTitle>
        <WidgetControlPanel widget={widget} />
      </CardHeader>
      <CardContent>
        <form className='space-y-6' onSubmit={e => handleSaveWidgetData(e)}>
          <QuestionInput
            onChange={(e) => handleUpdateQuestionValue(e)}
            value={widget.widgetQuestion}
          />
          <Textarea
            placeholder='type your answer here'
            disabled
            className='border-gray-300 placeholder:text-xs'
          />
          <div className='flex justify-end'>
            <Button
              type='submit'
              className='text-xs'
              variant='secondary'
            >
              Save
            </Button>
          </div>
        </form>
      </CardContent>
      {widget.isError && (
        <CardFooter>
          <p className='text-destructive font-light text-sm'>
            {widget.errMessage}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default PreSave;
