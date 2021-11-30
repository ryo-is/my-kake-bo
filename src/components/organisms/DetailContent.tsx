import { useState } from 'react';
import { IUseDate } from '@hooks/useDate';
import { DetailHeader } from '@molecules/DetailHeader';
import { DetailLogTable } from '@molecules/DetailLogTable';
import { DetailTotalArea } from '@molecules/DetailTotalArea';
import { useDetailData } from '@hooks/useDetailData';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailContent = ({ selectDate }: Props) => {
  const [isAddRowMode, setIsAddRowMode] = useState<boolean>(false);

  const {
    category,
    place,
    money,
    handleChangeCategory,
    handleChangePlace,
    handleChangeMoney,
    clearValues,
    setLog,
  } = useDetailData();

  return (
    <div className="h-1/2 pb-3">
      <div className="border border-gray-400 rounded h-full p-2 relative">
        <DetailHeader selectDate={selectDate} />
        <DetailLogTable
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
        <DetailTotalArea selectDate={selectDate} />
      </div>
    </div>
  );
};
