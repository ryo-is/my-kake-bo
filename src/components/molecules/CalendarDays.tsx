/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, memo } from 'react';
import dayjs from 'dayjs';
import { IUseDate } from '@hooks/useDate';
import { CalendarDate } from '@molecules/CalendarDate';
import { logSelectors } from '@recoil/logState';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';
import { useLogs } from '@hooks/useLogs';

type Props = Pick<IUseDate, 'selectDetailDate'>;

const CalendarDaysBase = ({ selectDetailDate }: Props) => {
  const [days, setDays] = useState<Array<dayjs.Dayjs>>([]);
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();
  const logs = logSelectors.useLogs();
  const { getLogs } = useLogs();

  useEffect(() => {
    const startDate = dayjs(selectedPeriod.startDate);
    const endDate = dayjs(selectedPeriod.endDate);
    const startMonthDayOfWeek = startDate.get('day');
    const endMonthDayOfWeek = endDate.get('day');
    const dateCount =
      endDate.get('date') +
      (startDate.endOf('M').get('date') - startDate.get('date'));
    const dateValues = [];
    for (let i = 0; i < startMonthDayOfWeek; i++) {
      dateValues.push(startDate.subtract(startMonthDayOfWeek - i, 'd'));
    }
    for (let i = 0; i <= dateCount; i++) {
      dateValues.push(startDate.add(i, 'd'));
    }
    for (let i = 1; i <= 6 - endMonthDayOfWeek; i++) {
      dateValues.push(endDate.add(i, 'd'));
    }
    setDays([...dateValues]);
    getLogs({ start: selectedPeriod.startDate, end: selectedPeriod.endDate });
  }, [selectedPeriod]);

  return (
    <div className="flex flex-wrap border-r border-gray-400">
      {days.map((day) => (
        <CalendarDate
          key={`day-${day.format('YYYY-MM-DD')}`}
          day={day}
          selectDetailDate={selectDetailDate}
          log={logs[day.format('YYYY-MM-DD')]}
        />
      ))}
    </div>
  );
};

export const CalendarDays = memo(CalendarDaysBase);
