'use client';
import WidgetControlPanel from '../ui/WidgetControlPanel';
import OptionInput from '../ui/optionInput';
import QuestionInput from '../ui/QuestionInput';
import { Button } from '../../ui/button';
import { Props } from './types';
import { usePreSaveMCQWidget } from './hooks';
import { MultipleChoiceQuestionType } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';

import { useDroppableSlice } from '@/app/hooks';
import {current} from '@reduxjs/toolkit';

function PreSaveMCQ({ widget }: Props) {
  const {
    handleSaveWidgetData,
    handleOptionChange,
    setQuestion,
    question,
    options,
  } = usePreSaveMCQWidget(widget);
  const { choices } = widget as MultipleChoiceQuestionType;

  const {dispatch, updateOptionsValue, widgets} = useDroppableSlice();

  const currentChoice = (choiceId: string) => {
    const choiceValue = choices.find(item => item.id === choiceId)?.label;
    return choiceValue;
  }

  const handleUpdateLabelInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const payLoad = {
      id,
      labelValue: e.target.value,
    };

    dispatch(updateOptionsValue(payLoad));
  }

  return (
    <Card className='bg-primary text-input'>
      <CardHeader>
        <CardTitle className='capitalize'>{widget.variant}</CardTitle>
        <WidgetControlPanel widget={widget} />
      </CardHeader>
      <div>
        <Separator className='w-full bg-gray-400/50 h-0.5 rounded-md' />
      </div>
      <CardContent className='-mt-4'>
        <form
          onSubmit={(e) => handleSaveWidgetData(e)}
          className='flex flex-col gap-6 mt-5 p-4 pb-0'
        >
          <CardDescription>
            Please fill in the question as well as the options
          </CardDescription>
          <QuestionInput
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            id='widget-question'
          />

          <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
            {choices.map((option) => (
              <OptionInput
                key={option.id}
                id={option.id}
                onChange={(e) => handleUpdateLabelInput(e, option.id)}
                name={option.id}
                value={currentChoice(option.id)}
              />
            ))}
          </div>

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
    </Card>
  );
}

export default PreSaveMCQ;
