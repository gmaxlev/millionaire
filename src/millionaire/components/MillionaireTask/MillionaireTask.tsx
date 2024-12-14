import {
  MillionaireOption, MillionaireTask as MillionaireTaskType,
} from '@/millionaire/types';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { TaskStatus } from '@/millionaire/store/types';
import MillionaireQuestion from '../MillionaireQuestion/MillionaireQuestion';
import MillionaireOptions from '../MillionaireOptions/MillionaireOptions';
import styles from './MillionaireTask.module.scss';

interface Props {
  taskWithStatus: { task: MillionaireTaskType, status: TaskStatus };
  options: Array<MillionaireOption & { isSelected: boolean }>;
  disabled: boolean;
  onFadeOutAnimationEnd: () => void;
  onAnswer: (id: MillionaireOption['id']) => void;
}

export default function MillionaireTask({
  taskWithStatus, options, onAnswer, disabled, onFadeOutAnimationEnd,
}: Props) {
  const { task, status } = taskWithStatus;

  const { question } = task;

  const {
    isCompleted, isWin, isLastTask,
  } = status;

  const isDisable = isCompleted || disabled;

  const [wasAnswer, setWasAnswer] = useState(false);

  const onAnswerCallback = useCallback((optionId: MillionaireOption['id']) => {
    onAnswer(optionId);
    setWasAnswer(true);
  }, [onAnswer]);

  const onAnimationEnd = () => {
    if (isCompleted && wasAnswer && isWin) {
      onFadeOutAnimationEnd();
    }
  };

  return (
    <div
      onAnimationEnd={onAnimationEnd}
      className={clsx('container', styles.task, {
        [styles.task_completed]: isCompleted && wasAnswer && isWin && !isLastTask,
      })}
    >
      <div className={clsx(styles.question, 'container')}>
        <MillionaireQuestion question={question} />
      </div>
      <MillionaireOptions options={options} onAnswer={onAnswerCallback} disabled={isDisable} />
    </div>
  );
}
