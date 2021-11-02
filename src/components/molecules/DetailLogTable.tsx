import { Dispatch, SetStateAction } from 'react';
import { DetailTableHeader } from '@molecules/DetailTableHeader';
import { DetailTableBody } from '@molecules/DetailTableBody';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';

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

export const DetailLogTable = ({
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
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <DetailTableHeader />
        <DetailTableBody
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
          logs={logs}
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
      </table>
    </div>
  );
};
