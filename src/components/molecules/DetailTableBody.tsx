import { Dispatch, memo, SetStateAction } from 'react';
import { DetailTableRow } from '@molecules/DetailTableRow';
import { DetailTableNewRow } from '@molecules/DetailTableNewRow';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import dayjs from 'dayjs';
import { logSelectors } from '@recoil/logState';

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
  clearValues: IUseDetailData['clearValues'];
  selectDate: IUseDate['selectDate'];
};

const DetailTableBodyBase = ({
  isAddRowMode,
  setIsAddRowMode,
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
  setLog,
  clearValues,
  selectDate,
}: Props) => {
  const logs = logSelectors.useLogs();

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
          clearValues={clearValues}
          selectDate={selectDate}
        />
      )}
    </tbody>
  );
};

export const DetailTableBody = memo(DetailTableBodyBase);
