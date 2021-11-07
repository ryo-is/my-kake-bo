import { useEffect } from 'react';
import { AnalyticsHeader } from '@molecules/AnalyticsHeader';
import { AnalyticsData } from '@molecules/AnalyticsData';
import { useAnalyticsData } from '@hooks/useAnalyticsData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const AnalyticsContent = ({ selectDate }: Props) => {
  const { analyticsData, getAnalyticsData } = useAnalyticsData();

  useEffect(() => {
    getAnalyticsData(dayjs(selectDate).format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectDate]);

  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      <AnalyticsHeader />
      <AnalyticsData analyticsData={analyticsData} />
    </div>
  );
};
