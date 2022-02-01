import { Period } from '@recoil/periodState';
import { IconButton } from '@atoms/IconButton';
import { TrashIcon } from '@heroicons/react/outline';

interface SideMenuPeriodItemProps {
  period: Period;
}

export const SideMenuPeriodItem = ({ period }: SideMenuPeriodItemProps) => {
  const { name, startDate, endDate } = period;

  const handleDeleteClick = () => {};

  return (
    <div className="pl-5 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
      <div>{name}</div>
      <div className="text-xs px-1 text-gray-400">{`${startDate}-${endDate}`}</div>
      <IconButton
        handleClick={handleDeleteClick}
        addClass="text-red-700 hover:bg-gray-500"
        tipText="削除"
      >
        <TrashIcon className="w-6 h-6" />
      </IconButton>
    </div>
  );
};
