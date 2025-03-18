import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormState = {
  name: string;
  streetAddress: string;
  city: string;
  phone: string;
  email: string;
};

const initialState: FormState = {
  name: '',
  streetAddress: '',
  city: '',
  phone: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof FormState] = value;
    },
    setFormValues: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload };
    },
    resetForm: (state) => {
      state.name = '';
      state.streetAddress = '';
      state.city = '';
      state.phone = '';
      state.email = '';
    },
  },
});

export const { updateField, setFormValues, resetForm } = formSlice.actions;

export default formSlice.reducer;
