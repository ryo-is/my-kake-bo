import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { Button } from '@atoms/Button';
import { PlusIcon, SaveIcon } from '@heroicons/react/solid';
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
    <div className={clsx('flex', 'pl-3', 'pr-4', !isAddRowMode && 'pt-2')}>
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
    </div>
  );
};
