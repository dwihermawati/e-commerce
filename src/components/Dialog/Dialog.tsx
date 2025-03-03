import styles from './Dialog.module.scss';
import { DialogType } from '@/types/Dialog';
import { createPortal } from 'react-dom';
import { Button } from '@/components/Button';
import { useCallback } from 'react';

export const Dialog: React.FC<DialogType> = ({
  title,
  message,
  primaryButtonTitle,
  secondaryButtonTitle,
  onSelectPrimaryButton,
  onSelectSecondaryButton,
}) => {
  const handleOnClickSubmitButton = useCallback(() => {
    if (!onSelectPrimaryButton) return;
    onSelectPrimaryButton();
  }, [onSelectPrimaryButton]);

  return createPortal(
    <div className={styles.dialogWrapper}>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
          <div className={styles.footer}>
            <Button color='optional' onClick={onSelectSecondaryButton}>
              {secondaryButtonTitle}
            </Button>
            <Button color='primary' onClick={handleOnClickSubmitButton}>
              {primaryButtonTitle}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  );
};
