import { Dispatch, memo, SetStateAction } from 'react';
import { Button } from '@atoms/Button';
import { TableCol } from '@atoms/TableCol';
import { PlusIcon } from '@heroicons/react/solid';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

const IncomeTableHeaderBase = ({ isAddRowMode, setIsAddRowMode }: Props) => {
  const handleAddRowClick = () => {
    setIsAddRowMode(true);
  };

  return (
    <thead>
      <tr className="text-sm">
        <TableCol
          width="40%"
          text="収入源"
          addClass="sticky top-0 border-b border-gray-400 bg-gray-100"
        />
        <TableCol
          width="40%"
          text="金額"
          addClass="sticky top-0 border-b border-gray-400 bg-gray-100"
        />
        <td className="mt-1 sticky top-0 border-b border-gray-400 bg-gray-100">
          {!isAddRowMode && (
            <Button
              handleClick={handleAddRowClick}
              addClass="border border-gray-600 text-gray-800 hover:bg-gray-200 ml-auto mr-2 my-0"
            >
              <PlusIcon className="fill-current w-4 h-4" />
              <span>追加</span>
            </Button>
          )}
        </td>
      </tr>
    </thead>
  );
};

export const IncomeTableHeader = memo(IncomeTableHeaderBase);
