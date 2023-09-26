import { useEffect, useState } from 'react';
import { OptionsInputType } from './types';
import { useDroppableSlice } from '@/app/hooks';
import {
  WidgetTypes,
  MultipleChoiceQuestionType,
  ChoiceType,
} from '@/lib/types';

export const usePreSaveMCQWidget = (widget: WidgetTypes) => {
  const { dispatch, saveWidgetData, widgets } = useDroppableSlice();
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<OptionsInputType>({});

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOptions({ ...options, [name]: value });
  };

  const generateOptionsArray = (options: OptionsInputType) =>
    Object.entries(options).map((entry) => ({
      id: entry[0],
      label: entry[1],
    }));

  const handleSaveWidgetData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newChoices = generateOptionsArray(options);
    const payload = {
      id: widget.id,
      widgetQuestion: question,
      choices: newChoices,
    };

    dispatch(saveWidgetData(payload));
  };

  const mapChoicesToOptions = (choices: ChoiceType[]) => {
    const optionsObject: OptionsInputType = {};
    choices.forEach((choice) => {
      if (!optionsObject[choice.id]) {
        optionsObject[choice.id] = choice.label;
      }
    });
    setOptions(optionsObject);
  };

  useEffect(() => {
    const currentWidget = widgets.find(
      (item) => item.id === widget.id
    ) as MultipleChoiceQuestionType;
    if (currentWidget.choices.length > 0) {
      mapChoicesToOptions(currentWidget.choices);
      setQuestion(currentWidget.widgetQuestion);
    }
  }, []);

  return {
    handleSaveWidgetData,
    handleOptionChange,
    setQuestion,
    question,
    options,
  };
};
