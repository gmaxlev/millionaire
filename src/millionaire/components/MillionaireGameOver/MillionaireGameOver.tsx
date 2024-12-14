import useCurrencyFormat from '@/hooks/useCurrencyFormat';
import Button from '@/components/Button/Button';
import styles from './MillionaireGameOver.module.scss';
import MillionaireFullScreen from '../MillionaireFullScreen/MillionaireFullScreen';

interface Props {
  reward: number;
  currency: string;
  onRestart: () => void;
}

export default function MillionaireGameOver({ reward, currency, onRestart }: Props) {
  const number = useCurrencyFormat(reward, currency);

  return (
    <MillionaireFullScreen>
      <div>
        <h1 className={styles.subheader}>
          Total score:
        </h1>
        <p className={styles.header}>
          {number}
          {' '}
          earned
        </p>
      </div>
      <Button type="button" onClick={onRestart}>
        Try again
      </Button>
    </MillionaireFullScreen>
  );
}
