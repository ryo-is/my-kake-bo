import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';

export const CalendarContent = () => {
  return (
    <div>
      <CalendarHeader />
      <CalendarDayOfWeek />
      <CalendarDays />
    </div>
  );
};
