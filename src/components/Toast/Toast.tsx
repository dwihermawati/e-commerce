import styles from './Toast.module.scss';
import clsx from 'clsx';
import React from 'react';

export type ToastProps = {
  variant: 'success' | 'information' | 'danger';
  message: string;
  onClose: () => void;
  toastIndex?: number;
};

export const Toast: React.FC<ToastProps> = ({
  variant,
  message,
  onClose,
  toastIndex = 0,
}) => {
  return (
    <div
      className={styles.toast}
      style={{
        top: `calc(13% + ${toastIndex * 50}px)`,
      }}
    >
      <div
        className={clsx(styles.toastContainer, {
          [styles.success]: variant === 'success',
          [styles.information]: variant === 'information',
          [styles.danger]: variant === 'danger',
        })}
        onClick={onClose}
      >
        <span className={styles.message}>{message}</span>
        <button className={styles.ok} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};
