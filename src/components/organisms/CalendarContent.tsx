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
  selectToday,
}: Props) => {
  return (
    <>
      <CalendarHeader />
      <CalendarDayOfWeek />
      <CalendarDays
        selectMonth={selectMonth}
        selectDate={selectDate}
        selectDetailDate={selectDetailDate}
      />
      <CalendarFooter selectToday={selectToday} />
    </>
  );
};
