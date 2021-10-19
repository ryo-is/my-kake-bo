import { useDate, IUseDate } from '@hooks/useDate';
import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';

export const CalendarContent = ({
  selectDate,
  prevMonth,
  nextMonth,
}: IUseDate) => {
  return (
    <>
      <CalendarHeader
        selectDate={selectDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarDayOfWeek />
      <CalendarDays selectDate={selectDate} />
    </>
  );
};
