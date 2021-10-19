import { useEffect, useState } from 'react';
import { IUseDate } from '@hooks/useDate';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { CalendarDayBox } from '@atoms/CalendarDayBox';

type Props = Pick<IUseDate, 'selectMonth' | 'selectDetailDate'>;

export const CalendarDays = ({ selectMonth, selectDetailDate }: Props) => {
  const [days, setDays] = useState<Array<dayjs.Dayjs>>([]);

  useEffect(() => {
    const startMonthDay = selectMonth.startOf('M');
    const endMonthDay = selectMonth.endOf('M');
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
  }, [selectMonth]);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((day) => (
        <CalendarDayBox key={`day-${day.format('YYYY-MM-DD')}`}>
          <div
            className={clsx(
              'w-full',
              'h-16',
              'flex',
              'justify-center',
              'items-center',
              'cursor-pointer',
              day.format('MM') !== dayjs(selectMonth).format('MM') &&
                'opacity-40'
            )}
            onClick={() => selectDetailDate(day)}
          >
            {day.format('D')}
          </div>
        </CalendarDayBox>
      ))}
    </div>
  );
};
