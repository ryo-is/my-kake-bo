import { VFC, useEffect } from 'react';
import dayjs from 'dayjs';
import { useDate } from '@hooks/useDate';
import { useLogs } from '@hooks/useLogs';
import { useIncomes } from '@hooks/useIncomes';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';
import { Incomes } from '@templates/Incomes';
import { Graph } from '@templates/Graph';

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
  const { getIncomes } = useIncomes();

  useEffect(() => {
    getLogs(dayjs(selectMonth).format('YYYY-MM-DD'));
    getIncomes(dayjs(selectMonth).format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100 overflow-y-scroll">
      <div className="w-2/3 py-3 pl-3 pr-0">
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
      <div className="w-1/3 p-3">
        <Detail selectDate={selectDate} />
        <Incomes />
        <Graph />
      </div>
    </div>
  );
};

export default Index;
