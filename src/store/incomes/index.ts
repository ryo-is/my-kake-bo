import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Income = {
  docID: string;
  label: string;
  value: number;
  date: string;
};

export type IncomeState = {
  incomes: Income[];
};

const initialState: IncomeState = {
  incomes: [],
};

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Income[]>) {
      const incomes = action.payload;
      state.incomes = incomes;
    },
    reset(): IncomeState {
      return initialState;
    },
  },
});
