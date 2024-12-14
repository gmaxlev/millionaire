import clsx from 'clsx';
import MenuIcon from '@/icons/MenuIcon';
import CloseIcon from '@/icons/CloseIcon';
import styles from './MillionaireHeader.module.scss';

interface Props {
  isOpen: boolean;
  disabled: boolean;
  onToggleMenu: (open: boolean) => void;
}

export default function MillionaireHeader({ onToggleMenu, isOpen, disabled }: Props) {
  const onOpenMenu = () => {
    onToggleMenu(true);
  };

  const onCloseMenu = () => {
    onToggleMenu(false);
  };

  const isOpenMenu = isOpen && !disabled;

  return (
    <div className={clsx('container', styles.header)}>
      {!isOpenMenu && (
      <button type="button" onClick={onOpenMenu} disabled={disabled}>
        <MenuIcon />
      </button>
      )}
      { isOpenMenu && (
      <button type="button" onClick={onCloseMenu} disabled={disabled}>
        <CloseIcon />
      </button>
      )}
    </div>
  );
}
