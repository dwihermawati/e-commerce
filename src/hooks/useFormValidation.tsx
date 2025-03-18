import { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateField } from '@/redux/formSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';

export const useFormValidation = () => {
  const formState = useSelector((state: RootState) => state.form);
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formState.name) newErrors.name = '*Name is required*';
    if (!formState.email) newErrors.email = '*Email is required*';
    if (!formState.phone) newErrors.phone = '*Phone is required*';
    if (!formState.streetAddress)
      newErrors.streetAddress = '*Street Address is required*';
    if (!formState.city) newErrors.city = '*City is required*';

    if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (formState.phone && !/^\d{10,15}$/.test(formState.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    setErrors(newErrors);
    // console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formState,
    errors,
    handleChange,
    validate,
  };
};
