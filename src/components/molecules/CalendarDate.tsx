/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { CalendarCellBox } from '@atoms/CalendarCellBox';
import { IUseDate } from '@hooks/useDate';
import { Log } from '@hooks/useDetailData';

dayjs.extend(isBetween);

type Props = {
  day: dayjs.Dayjs;
  selectMonth: IUseDate['selectMonth'];
  selectDate: IUseDate['selectDate'];
  selectDetailDate: IUseDate['selectDetailDate'];
  log: Log[];
};

export const CalendarDate = ({
  day,
  selectMonth,
  selectDate,
  selectDetailDate,
  log,
}: Props) => {
  const [bindStyles, setBindStyles] = useState<string[]>([]);

  const totalMoney = () => {
    if (!log) {
      return '0円';
    }
    let total = 0;
    log.forEach((l) => (total += l.money));
    return `${total.toLocaleString()}円`;
  };

  const isBetweenDate = (day: dayjs.Dayjs) => {
    const start = selectMonth.subtract(1, 'M').set('date', 24);
    const end = selectMonth.set('date', 25);
    if (!day.isBetween(start, end)) {
      return 'opacity-40';
    }
  };

  useEffect(() => {
    const newStyles = [];
    if (day.format('YYYY-MM-DD') === selectDate.format('YYYY-MM-DD')) {
      newStyles.push('bg-blue-500 text-white');
    } else {
      newStyles.push('hover:bg-blue-100');
    }
    setBindStyles([...newStyles]);
  }, [selectDate]);

  return (
    <CalendarCellBox key={`day-${day.format('YYYY-MM-DD')}`}>
      <div
        className={clsx(
          'w-full',
          'cursor-pointer',
          'relative',
          'p-12',
          isBetweenDate(day),
          ...bindStyles
        )}
        onClick={() => selectDetailDate(day)}
      >
        <div className="absolute top-2 left-2">{day.format('D')}</div>
        <div className="absolute bottom-2 right-2">{totalMoney()}</div>
      </div>
    </CalendarCellBox>
  );
};
