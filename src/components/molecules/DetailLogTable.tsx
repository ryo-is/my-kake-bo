import { Dispatch, memo, SetStateAction } from 'react';
import { DetailTableHeader } from '@molecules/DetailTableHeader';
import { DetailTableBody } from '@molecules/DetailTableBody';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';

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

const DetailLogTableBase = ({
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
  return (
    <div className="px-3 pt-1 overflow-y-scroll h-60">
      <table className="w-full border-separate border-spacing-0">
        <DetailTableHeader
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
          clearValues={clearValues}
        />
        <DetailTableBody
          isAddRowMode={isAddRowMode}
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
      </table>
    </div>
  );
};

export const DetailLogTable = memo(DetailLogTableBase);
