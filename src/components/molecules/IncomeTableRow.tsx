import { Income } from '@store/incomes';
import { TableCol } from '@atoms/TableCol';
import { IconButton } from '@atoms/IconButton';
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
    <tr className="border-b border-gray-400 text-sm">
      <TableCol width="" text={income.label} />
      <TableCol width="" text={`${income.value.toLocaleString()}円`} />
      <td className="flex justify-center">
        <IconButton
          handleClick={handleClickEdit}
          addClass="text-gray-700"
          tipText="編集"
        >
          <PencilIcon className="fill-current w-6 h-6" />
        </IconButton>
        <IconButton
          handleClick={handleClickEdit}
          addClass="text-red-700"
          tipText="削除"
        >
          <TrashIcon className="w-6 h-6" />
        </IconButton>
      </td>
    </tr>
  );
};
