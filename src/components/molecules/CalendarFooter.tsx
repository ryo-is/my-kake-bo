import dayjs from 'dayjs';
import { Button } from '@atoms/Button';
import { CalendarIcon } from '@heroicons/react/solid';
import { IUseDate } from '@hooks/useDate';
import { useLogs } from '@hooks/useLogs';
import { useIncomes } from '@hooks/useIncomes';

type Props = {
  selectToday: IUseDate['selectToday'];
};

export const CalendarFooter = ({ selectToday }: Props) => {
  const { getLogs } = useLogs();
  const { getIncomes } = useIncomes();

  const handleClick = () => {
    selectToday(dayjs());
    getLogs(dayjs().format('YYYY-MM-DD'));
    getIncomes(dayjs().format('YYYY-MM-DD'));
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
