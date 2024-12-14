import { MillionaireTask } from '@/millionaire/types';
import MillionaireTasksItem from './MillionaireTasksItem';

interface Props {
  tasks: MillionaireTask[];
  currenctTaskIndex: number;
}

export default function MillionaireTasks({ tasks, currenctTaskIndex }: Props) {
  return (
    <div>
      {tasks.map((task, index) => {
        const isCurrent = index === currenctTaskIndex;
        const isCompleted = index < currenctTaskIndex;

        return (
          <MillionaireTasksItem
            key={task.id}
            task={task}
            isCurrent={isCurrent}
            isCompleted={isCompleted}
          />
        );
      })}
    </div>
  );
}
