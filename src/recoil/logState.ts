import { atom, selector, useRecoilValue } from 'recoil';
import { RecoilAtomKeys, RecoilSelectorKeys } from './keys';

export type Log = {
  docID?: string;
  category: string;
  place: string;
  money: number;
  date: string;
  type: string;
};

export type AnalyticsData = {
  food: number;
  miscellaneous: number;
  eatingout: number;
  credit: number;
  utility: number;
  water: number;
  mobile: number;
  rent: number;
  insurance: number;
  total: number;
  income: number;
};

export type LogsState = {
  logs: { [date: string]: Log[] };
  analyticsData: AnalyticsData;
};

type LogSelectors = {
  useLogs: () => { [date: string]: Log[] };
  useAnalytics: () => AnalyticsData;
};

export const initialAnalyticsData = {
  food: 0,
  miscellaneous: 0,
  eatingout: 0,
  credit: 0,
  utility: 0,
  water: 0,
  mobile: 0,
  rent: 0,
  insurance: 0,
  total: 0,
  income: 0,
};

const initialState: LogsState = {
  logs: {},
  analyticsData: initialAnalyticsData,
};

export const logState = atom<LogsState>({
  key: RecoilAtomKeys.LOG_STATE,
  default: initialState,
});

const logSelector = selector<{ [date: string]: Log[] }>({
  key: RecoilSelectorKeys.LOG_LOGS,
  get: ({ get }) => get(logState).logs,
});

const analyticsDataSelector = selector<AnalyticsData>({
  key: RecoilSelectorKeys.LOG_ANALITICS,
  get: ({ get }) => get(logState).analyticsData,
});

export const logSelectors: LogSelectors = {
  useLogs: () => useRecoilValue(logSelector),
  useAnalytics: () => useRecoilValue(analyticsDataSelector),
};
