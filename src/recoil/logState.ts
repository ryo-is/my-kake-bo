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

type AnalyticsData = {
  food: number;
  miscellaneous: number;
  eatingout: number;
  other: number;
  total: number;
};

export type LogsState = {
  logs: { [date: string]: Log[] };
  analyticsData: AnalyticsData;
};

type LogSelectors = {
  useLogs: () => { [date: string]: Log[] };
  useAnalytics: () => AnalyticsData;
};

const initialState: LogsState = {
  logs: {},
  analyticsData: {
    food: 0,
    miscellaneous: 0,
    other: 0,
    eatingout: 0,
    total: 0,
  },
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
