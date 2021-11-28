import { useState } from 'react';
import { TableCol } from '@atoms/TableCol';
import { Log, useDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import { PencilIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import { Button } from '@atoms/Button';
import { DetailTableEditRow } from '@molecules/DetailTableEditRow';
import { useLogs } from '@hooks/useLogs';

type Props = {
  log: Log;
  selectDate: IUseDate['selectDate'];
};

export const DetailTableRow = ({ log, selectDate }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { updateLog, deleteLog } = useDetailData();
  const { getLogs } = useLogs();

  const getCategory = () => {
    const categories: { [k: string]: string } = {
      food: '食費',
      miscellaneous: '雑費',
      eatingout: '外食',
      other: 'その他',
      total: '合計',
    };
    return categories[log.category] ? categories[log.category] : '';
  };

  const getMoney = () => {
    return log.money.toLocaleString() + '円';
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleUpdateClick = async (log: Log) => {
    await updateLog(log);
    await getLogs(selectDate.format('YYYY-MM-DD'));
    setIsEdit(false);
  };

  const handleDeleteClick = async () => {
    if (log.docID) {
      const result = window.confirm('削除しますか？');
      if (result) {
        await deleteLog(log.docID);
        await getLogs(selectDate.format('YYYY-MM-DD'));
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
        <tr className="border-b border-gray-400 text-sm">
          <TableCol width="25%" text={getCategory()} />
          <TableCol width="35%" text={log.place} />
          <TableCol width="20%" text={getMoney()} />
          <td className="flex justify-center">
            <Button handleClick={handleClickEdit} addClass="text-gray-700">
              <PencilIcon className="fill-current w-6 h-6" />
            </Button>
            <Button handleClick={handleDeleteClick} addClass="text-red-700">
              <TrashIcon className="w-6 h-6" />
            </Button>
          </td>
        </tr>
      ) : (
        <DetailTableEditRow
          log={log}
          handleUpdateClick={handleUpdateClick}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};
