import styles from './CheckoutForm.module.scss';
import { updateField } from '@/redux/formSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

type CheckoutFormProps = {
  errors: string[];
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ errors }) => {
  const dispatch = useAppDispatch();
  const { name, email, phone, streetAddress, city } = useSelector(
    (state: RootState) => state.form
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  // const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   dispatch(updateField({ name, value }));
  // };

  const isError = (field: string) => errors.includes(field);

  return (
    <div className={styles.checkoutForm}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>First Name</label>
        {isError('name') && (
          <p className={styles.inputError}>This field is required</p>
        )}
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleChange}
          // className={isError('name') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='streetAddress'>Street Address</label>
        {isError('streetAddress') && (
          <p className={styles.inputError}>This field is required</p>
        )}
        <textarea
          name='streetAddress'
          id='streetAddress'
          value={streetAddress}
          onChange={handleChange}
          // className={isError('streetAddress') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='city'>Town/City</label>
        {isError('city') && (
          <p className={styles.inputError}>This field is required</p>
        )}
        <input
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={handleChange}
          // className={isError('city') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>Phone Number</label>
        {isError('phone') && (
          <p className={styles.inputError}>Phone number is invalid</p>
        )}
        <input
          type='tel'
          name='phone'
          id='phone'
          value={phone}
          onChange={handleChange}
          // className={isError('phone') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email Address</label>
        {isError('email') && (
          <p className={styles.inputError}>Email is invalid</p>
        )}
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
          // className={isError('email') ? styles.errorInput : ''}
        />
      </div>
    </div>
  );
};
