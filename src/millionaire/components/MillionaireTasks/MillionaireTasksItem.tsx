import { MillionaireTask } from '@/millionaire/types';
import clsx from 'clsx';
import useCurrencyFormat from '@/hooks/useCurrencyFormat';
import styles from './MillionaireTasksItem.module.scss';

interface Props {
  task: MillionaireTask;
  isCurrent: boolean;
  isCompleted: boolean;
  index: number;
  disabled: boolean;
  onClick: (index: number) => void;
}

export default function MillionaireTasksItem({
  isCurrent, isCompleted, task, onClick, index, disabled,
}: Props) {
  const { reward } = task;

  const { value } = reward;

  const display = useCurrencyFormat(value, 'USD');

  const onClickCallback = () => onClick(index);

  return (
    <div className={styles.item}>
      <button
        type="button"
        onClick={onClickCallback}
        disabled={disabled}
        className={clsx(styles.button, {
          [styles.button_current]: isCurrent,
          [styles.button_completed]: isCompleted,
        })}
      >
        <span>
          <span>
            {display}
          </span>
        </span>
      </button>
    </div>
  );
}
