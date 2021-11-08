import { IUseDate } from '@hooks/useDate';
import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';
import { CalendarFooter } from '@molecules/CalendarFooter';

type Props = IUseDate;

export const CalendarContent = ({
  selectMonth,
  selectDate,
  prevMonth,
  nextMonth,
  selectDetailDate,
}: Props) => {
  return (
    <>
      <CalendarHeader
        selectMonth={selectMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarDayOfWeek />
      <CalendarDays
        selectMonth={selectMonth}
        selectDate={selectDate}
        selectDetailDate={selectDetailDate}
      />
      <CalendarFooter selectDetailDate={selectDetailDate} />
    </>
  );
};
