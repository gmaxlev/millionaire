import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface Props extends PropsWithChildren {
  type: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ type, children, onClick }: Props) {
  return <button type={type === 'button' ? 'button' : 'submit'} className={styles.button} onClick={onClick}>{children}</button>;
}

Button.defaultProps = {
  onClick: undefined,
};
