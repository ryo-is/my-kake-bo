import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export const CalendarHeader = () => {
  return (
    <div className="border border-gray-400 flex py-2 px-4">
      <div className="cursor-pointer w-icon">
        <ChevronLeftIcon />
      </div>
      <div className="flex-1 text-center font-bold">○月</div>
      <div className="cursor-pointer w-icon">
        <ChevronRightIcon />
      </div>
    </div>
  );
};
