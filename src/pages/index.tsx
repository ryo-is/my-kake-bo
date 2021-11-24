import { VFC } from 'react';
import { useDate } from '@hooks/useDate';
import { useLogs } from '@hooks/useLogs';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';

const Index: VFC<{}> = () => {
  const {
    selectMonth,
    selectDate,
    prevMonth,
    nextMonth,
    selectDetailDate,
    selectToday,
  } = useDate();

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
        <Analytics selectMonth={selectMonth} />
      </div>
      <Detail selectDate={selectDate} />
    </div>
  );
};

export default Index;
