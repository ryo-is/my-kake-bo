import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';

type Props = Pick<IUseDate, 'selectMonth' | 'prevMonth' | 'nextMonth'>;

export const CalendarHeader = ({
  selectMonth,
  prevMonth,
  nextMonth,
}: Props) => {
  return (
    <div className="border border-gray-400 flex py-2 px-4 items-center">
      <div className="cursor-pointer w-icon" onClick={prevMonth}>
        <ChevronLeftIcon />
      </div>
      <div className="flex-1 text-center font-bold text-lg">
        {dayjs(selectMonth).get('y')} / {dayjs(selectMonth).get('M') + 1}
      </div>
      <div className="cursor-pointer w-icon" onClick={nextMonth}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};
