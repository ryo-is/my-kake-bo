import { memo, useState } from 'react';
import dayjs from 'dayjs';
import { TableCol } from '@atoms/TableCol';
import { IconButton } from '@atoms/IconButton';
import { PencilIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import { useIncomes } from '@hooks/useIncomes';
import { IncomeTableEditRow } from '@molecules/IncomeTableEditRow';
import { Income } from '@recoil/incomeState';

type Props = {
  income: Income;
};

const IncomeTableRowBase = ({ income }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { getIncomes, updateIncome, deleteIncome } = useIncomes();

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleUpdateClick = async (income: Income) => {
    await updateIncome(income);
    await getIncomes(dayjs().format('YYYY-MM-DD'));
    setIsEdit(false);
  };

  const handleDeleteClick = async () => {
    if (income.docID) {
      const result = window.confirm('削除しますか？');
      if (result) {
        await deleteIncome(income.docID);
        await getIncomes(dayjs().format('YYYY-MM-DD'));
      }
    }
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <tr className="text-sm">
          <TableCol
            width=""
            text={income.label}
            addClass="border-b border-gray-400"
          />
          <TableCol
            width=""
            text={`${income.value.toLocaleString()}円`}
            addClass="border-b border-gray-400"
          />
          <td className="border-b border-gray-400">
            <div className="flex justify-center">
              <IconButton
                handleClick={handleClickEdit}
                addClass="text-gray-700"
                tipText="編集"
              >
                <PencilIcon className="fill-current w-6 h-6" />
              </IconButton>
              <IconButton
                handleClick={handleDeleteClick}
                addClass="text-red-700"
                tipText="削除"
              >
                <TrashIcon className="w-6 h-6" />
              </IconButton>
            </div>
          </td>
        </tr>
      ) : (
        <IncomeTableEditRow
          income={income}
          handleUpdateClick={handleUpdateClick}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export const IncomeTableRow = memo(IncomeTableRowBase);
