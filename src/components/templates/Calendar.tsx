import { IUseDate } from '@hooks/useDate';
import { CalendarContent } from '@organisms/CalendarContent';

type Props = IUseDate;

export const Calendar = ({
  selectMonth,
  selectDate,
  prevMonth,
  nextMonth,
  selectDetailDate,
  selectToday,
}: Props) => {
  return (
    <div>
      <CalendarContent
        selectMonth={selectMonth}
        selectDate={selectDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        selectDetailDate={selectDetailDate}
        selectToday={selectToday}
      />
    </div>
  );
};
