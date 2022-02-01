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
      <tr className="text-sm">
        <TableCol
          width="40%"
          text="カテゴリー"
          addClass="sticky top-0 border-b border-gray-400 bg-gray-100"
        />
        {/* <TableCol
          width="35%"
          text="場所"
          addClass="sticky top-0 border-b border-gray-400 bg-gray-100"
        /> */}
        <TableCol
          width="40%"
          text="金額"
          addClass="sticky top-0 border-b border-gray-400 bg-gray-100"
        />
        <td className="mt-1 sticky top-0 border-b border-gray-400 bg-gray-100">
          {!isAddRowMode && (
            <Button
              handleClick={handleAddRowClick}
              addClass="border border-gray-600 text-gray-800 hover:bg-gray-200 ml-auto mr-0 my-0"
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
