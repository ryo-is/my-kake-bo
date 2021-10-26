import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { Button } from '@atoms/Button';
import { PlusIcon } from '@heroicons/react/solid';
import { SaveIcon } from '@heroicons/react/outline';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  submit: IUseDetailData['submit'];
};

export const DetailActions = ({
  isAddRowMode,
  setIsAddRowMode,
  submit,
}: Props) => {
  const handleAddRowClick = () => {
    setIsAddRowMode(true);
  };

  const handleSaveClick = async () => {
    await submit();
    setIsAddRowMode(false);
  };

  return (
    <div className={clsx('flex', 'px-3', !isAddRowMode && 'pt-2')}>
      {!isAddRowMode && (
        <Button
          handleClick={handleAddRowClick}
          addClass="bg-blue-600 hover:bg-blue-800"
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>列を追加する</span>
        </Button>
      )}
      <div className="flex-grow" />
      {isAddRowMode && (
        <Button
          handleClick={handleSaveClick}
          addClass="bg-blue-600 hover:bg-blue-800"
        >
          <SaveIcon className="w-4 h-4 mr-2" />
          <span>保存</span>
        </Button>
      )}
    </div>
  );
};
