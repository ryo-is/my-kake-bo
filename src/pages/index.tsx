import type { NextPage } from 'next';
import { useDate } from '@hooks/useDate';
import { useModal } from '@hooks/useModal';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';

const Index: NextPage = () => {
  const { selectMonth, selectDate, prevMonth, nextMonth, selectDetailDate } =
    useDate();

  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100">
      <div className="w-2/3 py-6 pl-6 pr-0">
        <Calendar
          selectMonth={selectMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          selectDetailDate={selectDetailDate}
        />
        <Analytics />
      </div>
      <Detail selectDate={selectDate} />
    </div>
  );
};

export default Index;
