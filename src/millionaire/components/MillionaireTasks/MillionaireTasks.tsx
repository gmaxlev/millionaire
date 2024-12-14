import { MillionaireTask } from '@/millionaire/types';
import clsx from 'clsx';
import { TaskStatus } from '@/millionaire/store/types';
import MillionaireTasksItem from './MillionaireTasksItem';
import styles from './MillionaireTasks.module.scss';

interface Props {
  tasks: Array<{ task: MillionaireTask, status: TaskStatus }>;
  currenctTaskIndex: number;
  isOpen: boolean;
  disabled: boolean;
  onClick: (index: number) => void;
}

export default function MillionaireTasks({
  tasks, currenctTaskIndex, isOpen, onClick, disabled,
}: Props) {
  return (
    <div className={clsx(styles.navigation, {
      [styles.navigation_open]: isOpen,
    })}
    >
      <div className={styles.content}>
        {[...tasks].reverse().map(({ task, status }, index, arr) => {
          const isCurrent = arr.length - index - 1 === currenctTaskIndex;

          const { isCompleted } = status;

          const normalizedIndex = arr.length - index - 1;

          return (
            <MillionaireTasksItem
              key={task.id}
              task={task}
              isCurrent={isCurrent}
              isCompleted={isCompleted}
              index={normalizedIndex}
              onClick={onClick}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
}
