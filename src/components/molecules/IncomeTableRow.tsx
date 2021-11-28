import { Income } from '@store/incomes';
import { TableCol } from '@atoms/TableCol';
import { Button } from '@atoms/Button';
import { PencilIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

type Props = {
  income: Income;
};

export const IncomeTableRow = ({ income }: Props) => {
  const handleClickEdit = () => {
    return;
  };

  return (
    <tr>
      <TableCol width="" text={income.label} />
      <TableCol width="" text={`${income.value.toLocaleString()}円`} />
      <td className="flex justify-center">
        <Button
          handleClick={handleClickEdit}
          addClass="text-gray-700 hover:bg-gray-200 rounded-full"
        >
          <PencilIcon className="fill-current w-6 h-6" />
        </Button>
        <Button
          handleClick={handleClickEdit}
          addClass="text-red-700 hover:bg-gray-200 rounded-full"
        >
          <TrashIcon className="w-6 h-6" />
        </Button>
      </td>
    </tr>
  );
};
