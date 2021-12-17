import { Dispatch, memo, SetStateAction } from 'react';
import { TableCol } from '@atoms/TableCol';
import { Button } from '@atoms/Button';
import { PlusIcon } from '@heroicons/react/solid';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  clearValues: IUseDetailData['clearValues'];
};

const DetailTableHeaderBase = ({
  isAddRowMode,
  setIsAddRowMode,
  clearValues,
}: Props) => {
  const handleAddRowClick = () => {
    setIsAddRowMode(true);
    clearValues();
  };

  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="25%" text="カテゴリー" />
        <TableCol width="35%" text="場所" />
        <TableCol width="20%" text="金額" />
        <td className="flex mt-1 justify-end">
          {!isAddRowMode && (
            <Button
              handleClick={handleAddRowClick}
              addClass="border border-gray-600 text-gray-800 hover:bg-gray-200"
            >
              <PlusIcon className="fill-current w-4 h-4 mr-2" />
              <span>追加</span>
            </Button>
          )}
        </td>
      </tr>
    </thead>
  );
};

export const DetailTableHeader = memo(DetailTableHeaderBase);
