import { Button } from '@atoms/Button';
import { TableCol } from '@atoms/TableCol';
import { PlusIcon } from '@heroicons/react/solid';

export const IncomeTableHeader = () => {
  const handleAddRowClick = () => {
    return;
  };

  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="40%" text="収入源" />
        <TableCol width="40%" text="金額" />
        <td className="flex mt-1 justify-end">
          <Button
            handleClick={handleAddRowClick}
            addClass="border border-gray-600 text-gray-800 hover:bg-gray-200"
          >
            <PlusIcon className="fill-current w-4 h-4 mr-2" />
            <span>追加</span>
          </Button>
        </td>
      </tr>
    </thead>
  );
};
