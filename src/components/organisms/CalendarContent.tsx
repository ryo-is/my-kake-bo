import { IUseDate } from '@hooks/useDate';
import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';

type Props = { selectDetailDate: IUseDate['selectDetailDate'] };

export const CalendarContent = ({ selectDetailDate }: Props) => {
  return (
    <>
      <CalendarHeader />
      <CalendarDayOfWeek />
      <CalendarDays selectDetailDate={selectDetailDate} />
    </>
  );
};
