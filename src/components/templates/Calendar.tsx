import { IUseDate } from '@hooks/useDate';
import { CalendarContent } from '@organisms/CalendarContent';

export const Calendar = ({ selectDate, prevMonth, nextMonth }: IUseDate) => {
  return (
    <div>
      <CalendarContent
        selectDate={selectDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </div>
  );
};
