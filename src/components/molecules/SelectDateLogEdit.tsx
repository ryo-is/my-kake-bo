import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { useDetailData } from '@hooks/useDetailData';
import { DetailLogTable } from '@molecules/DetailLogTable';
import { DetailTotalArea } from '@molecules/DetailTotalArea';

interface SelectDateLogEditProps {
  selectDate: Dayjs;
}

export const SelectDateLogEdit = ({ selectDate }: SelectDateLogEditProps) => {
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
    <>
      <div className="text-xl">{selectDate.format('YYYY-MM-DD')}の収支</div>
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
    </>
  );
};
