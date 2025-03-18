import React from 'react';
import styles from './CustomCheckbox.module.scss';

type CustomCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type='checkbox'
        id='checkbox'
        className={styles.checkbox}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor='checkbox' className={styles.checkboxCustom}></label>
    </div>
  );
};
