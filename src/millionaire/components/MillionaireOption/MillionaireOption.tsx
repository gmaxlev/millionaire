import useOptionWord from '@/millionaire/hooks/useOptionWord';
import { MillionaireOption as MillionaireOptionType } from '@/millionaire/types';
import clsx from 'clsx';
import styles from './MillionaireOption.module.scss';

interface Props {
  option: MillionaireOptionType & { isSelected: boolean };
  index: number;
  disabled: boolean;
  onAnswer: (id: MillionaireOptionType['id']) => void;
}

export default function MillionaireOption({
  option, onAnswer, disabled, index,
}: Props) {
  const { isSelected, text } = option;

  const word = useOptionWord(index);

  const onClick = () => {
    onAnswer(option.id);
  };

  const isDisabled = isSelected || disabled;

  const isCorrect = option.isCorrect && isSelected;

  const isWrong = !option.isCorrect && isSelected;

  return (
    <div className={styles.option}>
      <button
        className={clsx(styles.button, {
          [styles.button_selected]: isSelected,
          [styles.button_correct]: isCorrect,
          [styles.button_wrong]: isWrong,
        })}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
      >
        <span>
          <span>{word}</span>
          <span>{text}</span>
        </span>
      </button>
    </div>
  );
}
