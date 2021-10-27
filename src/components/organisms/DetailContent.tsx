import { useEffect, useState } from 'react';
import { IUseDate } from '@hooks/useDate';
import { DetailHeader } from '@molecules/DetailHeader';
import { DetailLogTable } from '@molecules/DetailLogTable';
import { DetailActions } from '@molecules/DetailActions';
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
    submit,
    getLogs,
  } = useDetailData();

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <div className="border border-gray-400 p-2 rounded h-full">
      <DetailHeader selectDate={selectDate} />
      <DetailLogTable
        isAddRowMode={isAddRowMode}
        category={category}
        place={place}
        money={money}
        handleChangeCategory={handleChangeCategory}
        handleChangePlace={handleChangePlace}
        handleChangeMoney={handleChangeMoney}
      />
      <DetailActions
        isAddRowMode={isAddRowMode}
        setIsAddRowMode={setIsAddRowMode}
        submit={submit}
      />
    </div>
  );
};
