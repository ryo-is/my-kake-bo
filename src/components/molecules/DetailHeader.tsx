import { IUseDate } from '@hooks/useDate';
import { IUseModal } from '@hooks/useModal';
import { PlusIcon } from '@heroicons/react/solid';
import { Button } from '@atoms/Button';

type Props = {
  selectDate: IUseDate['selectDate'];
  setIsModalOpen: IUseModal['setIsModalOpen'];
};

export const DetailHeader = ({ selectDate, setIsModalOpen }: Props) => {
  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center px-2 pt-2">
      <div className="text-xl flex-1">{selectDate.format('YYYY/MM/DD')}</div>
      <Button
        handleClick={handleClick}
        addClass="bg-indigo-600 hover:bg-indigo-800"
      >
        <PlusIcon className="fill-current w-4 h-4 mr-2" />
        <span>追加する</span>
      </Button>
    </div>
  );
};
