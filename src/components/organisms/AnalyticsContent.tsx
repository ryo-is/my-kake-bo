import { useEffect } from 'react';
import { AnalyticsHeader } from '@molecules/AnalyticsHeader';
import { AnalyticsData } from '@molecules/AnalyticsData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';
import { useLogs } from '@hooks/useLogs';

type Props = {
  selectMonth: IUseDate['selectMonth'];
};

export const AnalyticsContent = ({ selectMonth }: Props) => {
  const { getLogs } = useLogs();

  useEffect(() => {
    getLogs(dayjs(selectMonth).format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectMonth]);

  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      <AnalyticsHeader />
      <AnalyticsData />
    </div>
  );
};
