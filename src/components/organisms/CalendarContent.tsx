import { useDate } from '@hooks/useDate';
import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';

export const CalendarContent = () => {
  const { selectDate, prevMonth, nextMonth } = useDate();

  return (
    <>
      <CalendarHeader month={selectDate} prev={prevMonth} next={nextMonth} />
      <CalendarDayOfWeek />
      <CalendarDays month={selectDate} />
    </>
  );
};
