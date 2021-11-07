import { Dispatch, SetStateAction } from 'react';
import { DetailTableRow } from '@molecules/DetailTableRow';
import { DetailTableNewRow } from '@molecules/DetailTableNewRow';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
  setLog: IUseDetailData['setLog'];
  selectDate: IUseDate['selectDate'];
};

export const DetailTableBody = ({
  isAddRowMode,
  setIsAddRowMode,
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
  setLog,
  selectDate,
}: Props) => {
  const { logs } = useSelector((state: RootState) => state.logs);

  const getSelectDateLogs = () => {
    return logs[dayjs(selectDate).format('YYYY-MM-DD')] || [];
  };

  return (
    <tbody>
      {getSelectDateLogs().map((l) => (
        <DetailTableRow key={l.uuid} log={l} selectDate={selectDate} />
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
          selectDate={selectDate}
        />
      )}
    </tbody>
  );
};
