import { VFC, useEffect } from 'react';
import { useDate } from '@hooks/useDate';
import { useLogs } from '@hooks/useLogs';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';
import dayjs from 'dayjs';

const Index: VFC<{}> = () => {
  const {
    selectMonth,
    selectDate,
    prevMonth,
    nextMonth,
    selectDetailDate,
    selectToday,
  } = useDate();
  const { getLogs } = useLogs();

  useEffect(() => {
    getLogs(dayjs(selectMonth).format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100">
      <div className="w-2/3 py-6 pl-6 pr-0">
        <Calendar
          selectMonth={selectMonth}
          selectDate={selectDate}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          selectDetailDate={selectDetailDate}
          selectToday={selectToday}
        />
        <Analytics />
      </div>
      <Detail selectDate={selectDate} />
    </div>
  );
};

export default Index;
