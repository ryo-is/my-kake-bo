import { useState } from 'react';
import { Log } from '@hooks/useDetailData';
import { apiHelper } from '@infrastructures/helper';
import dayjs from 'dayjs';

type AnalyticsData = {
  food: number;
  miscellaneous: number;
  other: number;
  total: number;
};

const initData: AnalyticsData = {
  food: 0,
  miscellaneous: 0,
  other: 0,
  total: 0,
};

export interface IUseAnalyticsData {
  analyticsData: AnalyticsData;
  getAnalyticsData: (data: string) => Promise<void>;
}

export const useAnalyticsData = (): IUseAnalyticsData => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>(initData);

  const getAnalyticsData = async (date: string) => {
    try {
      const data = { ...analyticsData };
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${dayjs(date)
          .startOf('M')
          .format('YYYY-MM-DD')}&end=${dayjs(date)
          .endOf('M')
          .format('YYYY-MM-DD')}`,
      });
      Object.keys(res).forEach((key) => {
        const log = res[key];
        log.forEach((l) => {
          data[l.category as 'food' | 'miscellaneous' | 'other'] += l.money;
          data.total += l.money;
        });
      });
      setAnalyticsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return { analyticsData, getAnalyticsData };
};
