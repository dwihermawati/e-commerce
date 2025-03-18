import styles from './CheckoutForm.module.scss';
import { useFormValidation } from '@/hooks/useFormValidation';
import React, { useEffect, useRef } from 'react';

export const CheckoutFormWithCustomHook: React.FC = () => {
  const { errors, handleChange, formState } = useFormValidation();

  const inputRefs = {
    name: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLInputElement | null>(null),
    streetAddress: useRef<HTMLTextAreaElement | null>(null),
    city: useRef<HTMLInputElement | null>(null),
  };

  useEffect(() => {
    for (const key in errors) {
      if (errors[key]) {
        inputRefs[key as keyof typeof inputRefs]?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        break;
      }
    }
    console.log(errors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <div className={styles.checkoutForm}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>First Name</label>
        {errors.name ? (
          <p className={styles.inputError}>{errors.name}</p>
        ) : null}
        <input
          ref={inputRefs.name}
          type='text'
          name='name'
          id='name'
          value={formState.name}
          onChange={handleChange}
          // className={isError('name') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='streetAddress'>Street Address</label>
        {errors.streetAddress && (
          <p className={styles.inputError}>{errors.streetAddress}</p>
        )}
        <textarea
          ref={inputRefs.streetAddress}
          name='streetAddress'
          id='streetAddress'
          value={formState.streetAddress}
          onChange={handleChange}
          // className={isError('streetAddress') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='city'>Town/City</label>
        {errors.city && <p className={styles.inputError}>{errors.city}</p>}
        <input
          ref={inputRefs.city}
          type='text'
          name='city'
          id='city'
          value={formState.city}
          onChange={handleChange}
          // className={isError('city') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>Phone Number</label>
        {errors.phone && <p className={styles.inputError}>{errors.phone}</p>}
        <input
          ref={inputRefs.phone}
          type='tel'
          name='phone'
          id='phone'
          value={formState.phone}
          onChange={handleChange}
          // className={isError('phone') ? styles.errorInput : ''}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email Address</label>
        {errors.email && <p className={styles.inputError}>{errors.email}</p>}
        <input
          ref={inputRefs.email}
          type='email'
          name='email'
          id='email'
          value={formState.email}
          onChange={handleChange}
          // className={isError('email') ? styles.errorInput : ''}
        />
      </div>
    </div>
  );
};
