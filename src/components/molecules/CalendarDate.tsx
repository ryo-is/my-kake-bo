/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { CalendarCellBox } from '@atoms/CalendarCellBox';
import { IUseDate } from '@hooks/useDate';
import { Log } from '@recoil/logState';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';
import { ModalContent } from '@organisms/ModalContent';
import { SelectDateLogEdit } from '@molecules/SelectDateLogEdit';

dayjs.extend(isBetween);

type Props = {
  day: dayjs.Dayjs;
  selectDetailDate: IUseDate['selectDetailDate'];
  log: Log[];
};

const CalendarDateBase = ({ day, selectDetailDate, log }: Props) => {
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const totalInMoney = () => {
    if (!log) {
      return '0円';
    }
    let total = 0;
    log.forEach((l) => {
      if (l.type === 'in') {
        total += l.money;
      }
    });
    return `${total.toLocaleString()}円`;
  };

  const totalOutMoney = () => {
    if (!log) {
      return '0円';
    }
    let total = 0;
    log.forEach((l) => {
      if (l.type === 'out') {
        total += l.money;
      }
    });
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
      setIsOpen(true);
    }
  };

  return (
    <CalendarCellBox key={`day-${day.format('YYYY-MM-DD')}`}>
      <div
        className={clsx('w-full', 'relative', 'p-12', isBetweenDate(day))}
        onClick={() => handleClickDate()}
      >
        <div className="absolute top-2 left-2">{day.format('D')}</div>
        <div className="absolute bottom-2 right-2 text-sm text-right">
          <div className="text-blue-700">{totalInMoney()}</div>
          <div className="text-red-700">{totalOutMoney()}</div>
        </div>
      </div>
      <ModalContent isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
        <SelectDateLogEdit selectDate={day} setIsOpen={setIsOpen} />
      </ModalContent>
    </CalendarCellBox>
  );
};

export const CalendarDate = memo(CalendarDateBase);
