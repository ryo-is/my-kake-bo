import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import dayjs from 'dayjs';

type Props = {
  month: dayjs.Dayjs;
  next: () => void;
  prev: () => void;
};

export const CalendarHeader = (props: Props) => {
  const { month, next, prev } = props;

  return (
    <div className="border border-gray-400 flex py-2 px-4">
      <div className="cursor-pointer w-icon" onClick={prev}>
        <ChevronLeftIcon />
      </div>
      <div className="flex-1 text-center font-bold">
        {dayjs(month).get('y')}年 {dayjs(month).get('M') + 1}月
      </div>
      <div className="cursor-pointer w-icon" onClick={next}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};
