import { MillionaireOption as MillionaireOptionType } from '@/millionaire/types';
import MillionaireOption from '../MillionaireOption/MillionaireOption';

interface Props {
  options: Array<MillionaireOptionType & { isSelected: boolean } >;
  disabled: boolean;
  onAnswer: (id: MillionaireOptionType['id']) => void;
}

export default function MillionaireOptions({ options, onAnswer, disabled }: Props) {
  return (
    <div>
      {options.map((option, index) => (
        <MillionaireOption
          key={option.id}
          option={option}
          disabled={disabled}
          onAnswer={onAnswer}
          index={index}
        />
      ))}
    </div>
  );
}
