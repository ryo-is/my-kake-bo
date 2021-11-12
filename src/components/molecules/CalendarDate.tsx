/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { CalendarCellBox } from '@atoms/CalendarCellBox';
import { IUseDate } from '@hooks/useDate';
import { Log } from '@hooks/useDetailData';

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
          day.format('MM') !== dayjs(selectMonth).format('MM') && 'opacity-40',
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
