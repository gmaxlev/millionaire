import useOptionWord from '@/millionaire/hooks/useOptionWord';
import { MillionaireOption as MillionaireOptionType } from '@/millionaire/types';

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

  const buttonText = `${word} ${text}`;

  return (
    <button type="button" disabled={isDisabled} onClick={onClick}>{buttonText}</button>
  );
}
