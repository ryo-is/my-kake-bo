import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { Button } from '@atoms/Button';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  clearValues: IUseDetailData['clearValues'];
};

export const DetailActions = ({
  isAddRowMode,
  setIsAddRowMode,
  clearValues,
}: Props) => {
  const handleAddRowClick = () => {
    setIsAddRowMode(true);
    clearValues();
  };

  const handleCnacelClick = () => {
    setIsAddRowMode(false);
    clearValues();
  };

  return (
    <div className={clsx('flex', 'pl-3', 'pr-4', !isAddRowMode && 'pt-2')}>
      <div className="flex-grow" />
      {!isAddRowMode ? (
        <Button
          handleClick={handleAddRowClick}
          addClass="bg-blue-600 hover:bg-blue-800"
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>列を追加する</span>
        </Button>
      ) : (
        <Button
          handleClick={handleCnacelClick}
          addClass="bg-blue-600 hover:bg-blue-800"
        >
          <XIcon className="fill-current w-4 h-4 mr-2" />
          <span>キャンセル</span>
        </Button>
      )}
    </div>
  );
};
