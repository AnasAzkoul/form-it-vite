import { WidgetTypes } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import WidgetControlPanel from '../ui/WidgetControlPanel';
import QuestionInput from '../ui/QuestionInput';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useWidgetActions } from '../hooks';

type Props = {
  widget: WidgetTypes;
};

const PreSave = ({ widget }: Props) => {
  const {
    handleSaveWidgetData,
    handleUpdateQuestionValue
  } = useWidgetActions(widget);

  return (
    <Card className='bg-primary text-input'>
      <CardHeader className='flex-row justify-between items-center'>
        <CardTitle className='capitalize'>{widget.variant}</CardTitle>
        <WidgetControlPanel widget={widget} />
      </CardHeader>
      <div>
        <Separator className='w-full bg-gray-400/50 h-0.5 rounded-md mb-3' />
      </div>
      <CardContent>
        <form
          className='space-y-6'
          onSubmit={(e) => handleSaveWidgetData(e)}
        >
          <CardDescription>Please fill in the question input</CardDescription>
          <QuestionInput
            value={widget.widgetQuestion}
            onChange={(e) => handleUpdateQuestionValue(e)}
          />
          <RadioGroup className='flex justify-between w-1/2'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='yes'
                id='yes'
                disabled
              />
              <Label htmlFor='yes'>Yes, sure</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='no'
                id='no'
                disabled
              />
              <Label htmlFor='no'>No</Label>
            </div>
          </RadioGroup>
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
