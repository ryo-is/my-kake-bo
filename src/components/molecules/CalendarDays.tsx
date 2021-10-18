import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { CalendarDayBox } from '@atoms/CalendarDayBox';

type Props = {
  month: dayjs.Dayjs;
};

export const CalendarDays = (props: Props) => {
  const { month } = props;
  const [days, setDays] = useState<Array<number | null>>([]);

  useEffect(() => {
    const nowMonthDays = month.endOf('M').get('date');
    const startMonthDayOfWeek = month.startOf('M').get('day');
    const endMonthDayOfWeek = month.endOf('M').get('day');
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
  }, [month]);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((n, i) => (
        <CalendarDayBox key={`day-${n}-${i}`}>
          <div className="py-4">{n}</div>
        </CalendarDayBox>
      ))}
    </div>
  );
};
