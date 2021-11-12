import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import dayjs from 'dayjs';
import { IUseDate } from '@hooks/useDate';
import { CalendarDate } from '@molecules/CalendarDate';

type Props = Pick<IUseDate, 'selectMonth' | 'selectDate' | 'selectDetailDate'>;

export const CalendarDays = ({
  selectMonth,
  selectDate,
  selectDetailDate,
}: Props) => {
  const [days, setDays] = useState<Array<dayjs.Dayjs>>([]);
  const { logs } = useSelector((state: RootState) => state.logs);

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
  }, [selectMonth, selectDate]);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((day) => (
        <CalendarDate
          key={`day-${day.format('YYYY-MM-DD')}`}
          day={day}
          selectMonth={selectMonth}
          selectDate={selectDate}
          selectDetailDate={selectDetailDate}
          log={logs[day.format('YYYY-MM-DD')]}
        />
      ))}
    </div>
  );
};
