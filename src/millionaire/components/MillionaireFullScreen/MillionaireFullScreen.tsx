import { PropsWithChildren } from 'react';
import ThumbsUpIcon from '@/icons/ThumbsUpIcon';
import clsx from 'clsx';
import styles from './MillionaireFullScreen.module.scss';

interface Props extends PropsWithChildren {
  gradient?: boolean;
}

export default function FullScreen({ children, gradient = false }: Props) {
  return (
    <div className={clsx(styles.over, {
      [styles.gradient]: gradient,
    })}
    >
      <div className={clsx('container', styles.content)}>
        <ThumbsUpIcon />
        <div className={styles.text}>
          {children}
        </div>
      </div>
    </div>
  );
}

FullScreen.defaultProps = {
  gradient: false,
};
