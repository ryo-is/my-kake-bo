import { IUseDate } from '@hooks/useDate';
import { CalendarContent } from '@organisms/CalendarContent';

type Props = Pick<IUseDate, 'selectMonth' | 'prevMonth' | 'nextMonth'>;

export const Calendar = ({ selectMonth, prevMonth, nextMonth }: Props) => {
  return (
    <div>
      <CalendarContent
        selectMonth={selectMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </div>
  );
};
