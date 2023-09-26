import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MultipleChoiceQuestionType } from '@/lib/types';
import { Props } from './types';
import { useDroppableSlice } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';

function PostSaveMCQ({ widget }: Props) {
  const { choices, widgetQuestion } = widget as MultipleChoiceQuestionType;
  const { editWidgetData, dispatch } = useDroppableSlice();

  return (
    <Card className='bg-primary text-input border-none'>
      <CardHeader>
        <CardTitle>{widgetQuestion}</CardTitle>
        <CardDescription>
          Please select one of the following options
        </CardDescription>
      </CardHeader>

      <CardContent className='mt-3'>
        <form>
          <RadioGroup>
            <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
              {choices.map((choice) => (
                <div
                  key={choice.id}
                  className='flex items-center gap-3'
                >
                  <RadioGroupItem
                    value={choice.label}
                    id={choice.id}
                  />
                  <Label>{choice.label}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
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

export default PostSaveMCQ;
