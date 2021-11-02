import { useState } from 'react';
import { TableCol } from '@atoms/TableCol';
import { Log } from '@hooks/useDetailData';
import { PencilIcon } from '@heroicons/react/solid';
import { Button } from '@atoms/Button';
import { DetailTableEditRow } from '@molecules/DetailTableEditRow';

type Props = {
  log: Log;
};

export const DetailTableRow = ({ log }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

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

  const handleSaveClick = () => {
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
        <DetailTableEditRow log={log} handleSaveClick={handleSaveClick} />
      )}
    </>
  );
};
