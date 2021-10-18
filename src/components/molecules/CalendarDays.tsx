import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { CalendarDayBox } from '@atoms/CalendarDayBox';

export const CalendarDays = () => {
  const [days, setDays] = useState<Array<number | null>>([]);

  useEffect(() => {
    const now = dayjs();
    const nowMonthDays = now.endOf('M').get('date');
    const startMonthDayOfWeek = now.startOf('M').get('day');
    const endMonthDayOfWeek = now.endOf('M').get('day');
    const dateValues = [];
    for (let i = 0; i < startMonthDayOfWeek; i++) {
      dateValues.push(null);
    }
    for (let i = 1; i <= nowMonthDays; i++) {
      dateValues.push(i);
    }
    for (let i = endMonthDayOfWeek; i < 6; i++) {
      dateValues.push(null);
    }
    setDays([...dateValues]);
  }, []);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((n, i) => (
        <CalendarDayBox key={`day-${n}-${i}`}>
          <div>{n}</div>
        </CalendarDayBox>
      ))}
    </div>
  );
};
