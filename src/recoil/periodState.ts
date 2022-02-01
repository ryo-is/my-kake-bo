import { atom, selector, useRecoilValue } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './keys';

export type Period = {
  docID?: string;
  name: string;
  startDate: string;
  endDate: string;
};

export type PeriodState = {
  periods: Period[];
};

type PeriodSelectors = {
  usePeriodSelector: () => Period[];
};

const initialState: PeriodState = {
  periods: [],
};

export const periodState = atom<PeriodState>({
  key: RecoilAtomKeys.PERIOD_STATE,
  default: initialState,
});

const periodSelector = selector<Period[]>({
  key: RecoilSelectorKeys.PERIOD_PERIODS,
  get: ({ get }) => get(periodState).periods,
});

export const periodSelectors: PeriodSelectors = {
  usePeriodSelector: () => useRecoilValue(periodSelector),
};
