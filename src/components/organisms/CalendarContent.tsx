import { useState } from 'react';
import dayjs from 'dayjs';
import { CalendarHeader } from '@molecules/CalendarHeader';
import { CalendarDayOfWeek } from '@molecules/CalendarDayOfWeek';
import { CalendarDays } from '@molecules/CalendarDays';

export const CalendarContent = () => {
  const [selectedMonth, setSelectedMonth] = useState(dayjs());

  const handleNextMonth = () => {
    setSelectedMonth((prev) => dayjs(prev).add(1, 'M'));
  };

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => dayjs(prev).subtract(1, 'M'));
  };

  return (
    <>
      <CalendarHeader
        month={selectedMonth}
        next={handleNextMonth}
        prev={handlePrevMonth}
      />
      <CalendarDayOfWeek />
      <CalendarDays month={selectedMonth} />
    </>
  );
};
