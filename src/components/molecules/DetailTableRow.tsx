import { memo, useState } from 'react';
import { TableCol } from '@atoms/TableCol';
import { Log } from '@recoil/logState';
import { useDetailData, categories } from '@hooks/useDetailData';
import { PencilIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import { IconButton } from '@atoms/IconButton';
import { DetailTableEditRow } from '@molecules/DetailTableEditRow';
import { useLogs } from '@hooks/useLogs';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';

type Props = {
  log: Log;
};

const DetailTableRowBase = ({ log }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { updateLog, deleteLog } = useDetailData();
  const { getLogs } = useLogs();
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();

  const getCategory = () => {
    return categories.find((c) => c.value === log.category)?.text || '';
  };

  const getMoney = () => {
    return log.money.toLocaleString() + '円';
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleUpdateClick = async (log: Log) => {
    await updateLog(log);
    await getLogs({
      start: selectedPeriod.startDate,
      end: selectedPeriod.endDate,
    });
    setIsEdit(false);
  };

  const handleDeleteClick = async () => {
    if (log.docID) {
      const result = window.confirm('削除しますか？');
      if (result) {
        await deleteLog(log.docID);
        await getLogs({
          start: selectedPeriod.startDate,
          end: selectedPeriod.endDate,
        });
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
            width="25%"
            text={getCategory()}
            addClass="border-b border-gray-400"
          />
          {/* <TableCol
            width="35%"
            text={log.place}
            addClass="border-b border-gray-400"
          /> */}
          <TableCol
            width="20%"
            text={getMoney()}
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
        <DetailTableEditRow
          log={log}
          handleUpdateClick={handleUpdateClick}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export const DetailTableRow = memo(DetailTableRowBase);
