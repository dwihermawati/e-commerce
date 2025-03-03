import styles from './Button.module.scss';
import React, { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'optional';
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  disabled,
  onClick,
  ...remainingProps
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.optional]: color === 'optional',
      })}
      onClick={onClick}
      disabled={disabled}
      {...remainingProps}
    >
      <span>{children}</span>
    </button>
  );
};
