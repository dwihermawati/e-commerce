import styles from './Toast.module.scss';
import React from 'react';

export type ToastProps = {
  message: string;
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className={styles.toastContainer} onClick={onClose}>
      <span className={styles.message}>{message}</span>
      <button className={styles.ok} onClick={onClose}>
        OK
      </button>
    </div>
  );
};
