import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IUseDate } from '@hooks/useDate';
import { useLogs } from '@hooks/useLogs';
import dayjs from 'dayjs';

type Props = Pick<IUseDate, 'selectMonth' | 'prevMonth' | 'nextMonth'>;

export const CalendarHeader = ({
  selectMonth,
  prevMonth,
  nextMonth,
}: Props) => {
  const { getLogs } = useLogs();

  const handlePrevMonth = () => {
    getLogs(selectMonth.subtract(1, 'M').format('YYYY-MM-DD'));
    prevMonth();
  };

  const handleNextMonth = () => {
    getLogs(selectMonth.add(1, 'M').format('YYYY-MM-DD'));
    nextMonth();
  };

  return (
    <div className="border border-gray-400 flex py-2 px-4 items-center">
      <div className="cursor-pointer w-icon" onClick={() => handlePrevMonth()}>
        <ChevronLeftIcon />
      </div>
      <div className="flex-1 text-center font-bold text-lg">
        {dayjs(selectMonth).get('y')} / {dayjs(selectMonth).get('M') + 1}
      </div>
      <div className="cursor-pointer w-icon" onClick={() => handleNextMonth()}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};
