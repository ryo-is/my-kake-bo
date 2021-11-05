import { Dispatch, SetStateAction } from 'react';
import { DetailTableRow } from '@molecules/DetailTableRow';
import { DetailTableNewRow } from '@molecules/DetailTableNewRow';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  logs: IUseDetailData['logs'];
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
  setLog: IUseDetailData['setLog'];
  getLogs: IUseDetailData['getLogs'];
  selectDate: IUseDate['selectDate'];
};

export const DetailTableBody = ({
  isAddRowMode,
  setIsAddRowMode,
  logs,
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
  setLog,
  getLogs,
  selectDate,
}: Props) => {
  const getSelectDateLogs = () => {
    return logs[dayjs(selectDate).format('YYYY-MM-DD')] || [];
  };

  return (
    <tbody>
      {getSelectDateLogs().map((l) => (
        <DetailTableRow
          key={l.uuid}
          log={l}
          getLogs={getLogs}
          selectDate={selectDate}
        />
      ))}
      {isAddRowMode && (
        <DetailTableNewRow
          setIsAddRowMode={setIsAddRowMode}
          category={category}
          place={place}
          money={money}
          handleChangeCategory={handleChangeCategory}
          handleChangePlace={handleChangePlace}
          handleChangeMoney={handleChangeMoney}
          setLog={setLog}
          getLogs={getLogs}
          selectDate={selectDate}
        />
      )}
    </tbody>
  );
};
