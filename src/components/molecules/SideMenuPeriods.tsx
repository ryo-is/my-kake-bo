import { Button } from '@atoms/Button';
import { IconButton } from '@atoms/IconButton';
import { PlusIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

export const SideMenuPeriods = () => {
  const handleClick = () => {};

  const handleDeleteClick = () => {};

  return (
    <div className="pt-3">
      <div className="pl-5 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
        <div>1月</div>
        <div className="text-xs px-1 text-gray-400">2021/12/24-2022/01/24</div>
        <IconButton
          handleClick={handleDeleteClick}
          addClass="text-red-700 hover:bg-gray-500"
          tipText="削除"
        >
          <TrashIcon className="w-6 h-6" />
        </IconButton>
      </div>
      <div className="pl-5 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
        <div>2月</div>
        <div className="text-xs px-1 text-gray-400">2022/01/25-2022/02/24</div>
        <IconButton
          handleClick={handleDeleteClick}
          addClass="text-red-700 hover:bg-gray-500"
          tipText="削除"
        >
          <TrashIcon className="w-6 h-6" />
        </IconButton>
      </div>
      <div className="pl-5 pt-2">
        <Button
          handleClick={handleClick}
          addClass="border border-gray-600 hover:bg-gray-700 mr-0 my-0"
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>期間を追加</span>
        </Button>
      </div>
    </div>
  );
};
