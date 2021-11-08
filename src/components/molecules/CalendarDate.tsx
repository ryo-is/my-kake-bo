/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { CalendarCellBox } from '@atoms/CalendarCellBox';
import { IUseDate } from '@hooks/useDate';

type Props = {
  day: dayjs.Dayjs;
  selectMonth: IUseDate['selectMonth'];
  selectDate: IUseDate['selectDate'];
  selectDetailDate: IUseDate['selectDetailDate'];
};

export const CalendarDate = ({
  day,
  selectMonth,
  selectDate,
  selectDetailDate,
}: Props) => {
  const [bindStyles, setBindStyles] = useState<string[]>([]);

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
          'flex',
          'justify-center',
          'items-center',
          'cursor-pointer',
          'p-8',
          day.format('MM') !== dayjs(selectMonth).format('MM') && 'opacity-40',
          ...bindStyles
        )}
        onClick={() => selectDetailDate(day)}
      >
        {day.format('D')}
      </div>
    </CalendarCellBox>
  );
};
