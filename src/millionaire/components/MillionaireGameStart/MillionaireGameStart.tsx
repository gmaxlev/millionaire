import Button from '@/components/Button/Button';
import styles from './MillionaireGameStart.module.scss';
import MillionaireFullScreen from '../MillionaireFullScreen/MillionaireFullScreen';

interface Props {
  onStart: () => void;
}

export default function MillionaireGameStart({ onStart }: Props) {
  return (
    <MillionaireFullScreen gradient>
      <h1 className={styles.header}>
        Who wants to be a millionaire?
      </h1>
      <Button type="button" onClick={onStart}>
        Start
      </Button>
    </MillionaireFullScreen>
  );
}
