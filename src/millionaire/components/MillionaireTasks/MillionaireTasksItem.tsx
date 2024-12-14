import { MillionaireTask } from '@/millionaire/types';

interface Props {
  task: MillionaireTask;
  isCurrent: boolean;
  isCompleted: boolean;
}

export default function MillionaireTasksItem({ isCurrent, isCompleted, task }: Props) {
  const { reward } = task;

  const { value } = reward;

  return (
    <div>
      {value}
      {' '}
      {isCurrent ? 'current' : isCompleted ? 'completed' : 'not completed'}
    </div>
  );
}
