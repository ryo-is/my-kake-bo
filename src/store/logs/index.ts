import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Log = {
  docID?: string;
  uuid: string;
  category: string;
  place: string;
  money: number;
  date: string;
};
type AnalyticsData = {
  food: number;
  miscellaneous: number;
  other: number;
  total: number;
};

export type LogsState = {
  logs: { [date: string]: Log[] };
  analyticsData: AnalyticsData;
};

const initialState: LogsState = {
  logs: {},
  analyticsData: { food: 0, miscellaneous: 0, other: 0, total: 0 },
};

export const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    update(state, action: PayloadAction<{ [date: string]: Log[] }>) {
      const logs = action.payload;
      state.logs = logs;

      const analyticsData = { ...initialState.analyticsData };
      Object.keys(logs).forEach((key) => {
        const log = logs[key];
        log.forEach((l) => {
          analyticsData[l.category as 'food' | 'miscellaneous' | 'other'] +=
            l.money;
          analyticsData.total += l.money;
        });
      });
      state.analyticsData = analyticsData;
    },
    reset(): LogsState {
      return initialState;
    },
  },
});
