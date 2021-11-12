import { useState } from 'react';
import { TableCol } from '@atoms/TableCol';
import { Log, useDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import { PencilIcon } from '@heroicons/react/solid';
import { Button } from '@atoms/Button';
import { DetailTableEditRow } from '@molecules/DetailTableEditRow';
import { useLogs } from '@hooks/useLogs';

type Props = {
  log: Log;
  selectDate: IUseDate['selectDate'];
};

export const DetailTableRow = ({ log, selectDate }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { updateLog } = useDetailData();
  const { getLogs } = useLogs();

  const getCategory = () => {
    const categories: { [k: string]: string } = {
      food: '食費',
      miscellaneous: '雑費',
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

  return (
    <>
      {!isEdit ? (
        <tr className="border-b border-gray-400 text-sm">
          <TableCol width="25%" text={getCategory()} />
          <TableCol width="40%" text={log.place} />
          <TableCol width="25%" text={getMoney()} />
          <td>
            <Button handleClick={handleClickEdit} addClass="text-gray-700">
              <PencilIcon className="fill-current w-6 h-6" />
            </Button>
          </td>
        </tr>
      ) : (
        <DetailTableEditRow log={log} handleUpdateClick={handleUpdateClick} />
      )}
    </>
  );
};
