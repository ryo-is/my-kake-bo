import dayjs from 'dayjs';
import { Button } from '@atoms/Button';
import { CalendarIcon } from '@heroicons/react/solid';
import { IUseDate } from '@hooks/useDate';

type Props = {
  selectToday: IUseDate['selectToday'];
};

export const CalendarFooter = ({ selectToday }: Props) => {
  const handleClick = () => {
    selectToday(dayjs());
  };

  return (
    <div className="border border-gray-400 flex py-2 px-4 items-center border-t-0">
      <div className="flex-1" />
      <Button
        handleClick={handleClick}
        addClass="bg-gray-600 hover:bg-gray-800"
      >
        <CalendarIcon className="w-4 h-4 mr-2" />
        <span>本日に移動</span>
      </Button>
    </div>
  );
};
