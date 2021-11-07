import { useEffect } from 'react';
import { AnalyticsHeader } from '@molecules/AnalyticsHeader';
import { AnalyticsData } from '@molecules/AnalyticsData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';
import { useLogs } from '@hooks/useLogs';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const AnalyticsContent = ({ selectDate }: Props) => {
  const { getLogs } = useLogs();

  useEffect(() => {
    getLogs(dayjs(selectDate).format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectDate]);

  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      <AnalyticsHeader />
      <AnalyticsData />
    </div>
  );
};
