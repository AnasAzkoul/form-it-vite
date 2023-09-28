import { WidgetTypes } from '@/lib/types';
import PreSave from './PreSave';

type Props = {
  widget: WidgetTypes;
};

const YesNoQuestion = ({ widget }: Props) => {
  return <>
    <PreSave widget={widget}/>
  </>;
};

export default YesNoQuestion;
