import { IUseDate } from '@hooks/useDate';
import { CalendarContent } from '@organisms/CalendarContent';

type Props = Pick<
  IUseDate,
  'selectMonth' | 'prevMonth' | 'nextMonth' | 'selectDetailDate'
>;

export const Calendar = ({
  selectMonth,
  prevMonth,
  nextMonth,
  selectDetailDate,
}: Props) => {
  return (
    <div>
      <CalendarContent
        selectMonth={selectMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        selectDetailDate={selectDetailDate}
      />
    </div>
  );
};
