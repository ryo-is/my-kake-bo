/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { CalendarCellBox } from '@atoms/CalendarCellBox';
import { IUseDate } from '@hooks/useDate';
import { Log } from '@hooks/useDetailData';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';

dayjs.extend(isBetween);

type Props = {
  day: dayjs.Dayjs;
  selectDetailDate: IUseDate['selectDetailDate'];
  log: Log[];
};

const CalendarDateBase = ({ day, selectDetailDate, log }: Props) => {
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();

  const totalMoney = () => {
    if (!log) {
      return '0円';
    }
    let total = 0;
    log.forEach((l) => (total += l.money));
    return `${total.toLocaleString()}円`;
  };

  const isBetweenDate = (day: dayjs.Dayjs) => {
    const start = dayjs(selectedPeriod.startDate).subtract(1, 'd');
    const end = dayjs(selectedPeriod.endDate).add(1, 'd');
    if (!day.isBetween(start, end)) {
      return 'opacity-0';
    } else {
      return 'cursor-pointer';
    }
  };

  const handleClickDate = () => {
    const start = dayjs(selectedPeriod.startDate).subtract(1, 'd');
    const end = dayjs(selectedPeriod.endDate).add(1, 'd');
    if (day.isBetween(start, end)) {
      selectDetailDate(day);
    }
  };

  return (
    <CalendarCellBox key={`day-${day.format('YYYY-MM-DD')}`}>
      <div
        className={clsx('w-full', 'relative', 'p-12', isBetweenDate(day))}
        onClick={() => handleClickDate()}
      >
        <div className="absolute top-2 left-2">{day.format('D')}</div>
        <div className="absolute bottom-2 right-2">{totalMoney()}</div>
      </div>
    </CalendarCellBox>
  );
};

export const CalendarDate = memo(CalendarDateBase);
