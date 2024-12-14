import { MillionaireOption, MillionaireTask as MillionaireTaskType } from '@/millionaire/types';
import MillionaireQuestion from '../MillionaireQuestion/MillionaireQuestion';
import MillionaireOptions from '../MillionaireOptions/MillionaireOptions';

interface Props {
  task: MillionaireTaskType;
  options: Array<MillionaireOption & { isSelected: boolean }>;
  disabled: boolean;
  onAnswer: (id: MillionaireOption['id']) => void;
}

export default function MillionaireTask({
  task, options, onAnswer, disabled,
}: Props) {
  const { question } = task;

  return (
    <div>
      <MillionaireQuestion question={question} />
      <MillionaireOptions options={options} onAnswer={onAnswer} disabled={disabled} />
    </div>
  );
}
