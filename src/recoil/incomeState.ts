import { atom, selector, useRecoilValue } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './keys';

export type Income = {
  docID?: string;
  label: string;
  value: number;
  date: string;
};

export type IncomeState = {
  incomes: Income[];
};

type IncomeSelectors = {
  useIncomes: () => Income[];
};

const initialState: IncomeState = {
  incomes: [],
};

export const incomeState = atom<IncomeState>({
  key: RecoilAtomKeys.INCOME_STATE,
  default: initialState,
});

const incomeSelector = selector<Income[]>({
  key: RecoilSelectorKeys.INCOME_INCOMES,
  get: ({ get }) => get(incomeState).incomes,
});

export const incomeSelectors: IncomeSelectors = {
  useIncomes: () => useRecoilValue(incomeSelector),
};
