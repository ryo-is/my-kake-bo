import { useEffect, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { CalendarDayBox } from '@atoms/CalendarDayBox';

type Props = {
  selectDate: dayjs.Dayjs;
};

export const CalendarDays = ({ selectDate }: Props) => {
  const [days, setDays] = useState<Array<dayjs.Dayjs>>([]);

  useEffect(() => {
    const startMonthDay = selectDate.startOf('M');
    const endMonthDay = selectDate.endOf('M');
    const startMonthDayOfWeek = startMonthDay.get('day');
    const endMonthDayOfWeek = endMonthDay.get('day');
    const nowMonthDayCount = endMonthDay.get('date');
    const dateValues = [];
    for (let i = 0; i < startMonthDayOfWeek; i++) {
      dateValues.push(startMonthDay.subtract(startMonthDayOfWeek - i, 'd'));
    }
    for (let i = 0; i < nowMonthDayCount; i++) {
      dateValues.push(startMonthDay.add(i, 'd'));
    }
    for (let i = 1; i <= 6 - endMonthDayOfWeek; i++) {
      dateValues.push(endMonthDay.add(i, 'd'));
    }
    setDays([...dateValues]);
  }, [selectDate]);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((day) => (
        <CalendarDayBox key={`day-${day.format('YYYY-MM-DD')}`}>
          <div
            className={clsx(
              'py-6',
              day.format('MM') !== dayjs(selectDate).format('MM') &&
                'opacity-40'
            )}
          >
            {day.format('D')}
          </div>
        </CalendarDayBox>
      ))}
    </div>
  );
};
