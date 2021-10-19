import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';

export const CalendarHeader = ({
  selectDate,
  prevMonth,
  nextMonth,
}: IUseDate) => {
  return (
    <div className="border border-gray-400 flex py-2 px-4">
      <div className="cursor-pointer w-icon" onClick={prevMonth}>
        <ChevronLeftIcon />
      </div>
      <div className="flex-1 text-center font-bold">
        {dayjs(selectDate).get('y')} / {dayjs(selectDate).get('M') + 1}
      </div>
      <div className="cursor-pointer w-icon" onClick={nextMonth}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};
