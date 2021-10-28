import { useEffect, useState } from 'react';
import { IUseDate } from '@hooks/useDate';
import { DetailHeader } from '@molecules/DetailHeader';
import { DetailLogTable } from '@molecules/DetailLogTable';
import { DetailActions } from '@molecules/DetailActions';
import { useDetailData } from '@hooks/useDetailData';
import dayjs from 'dayjs';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailContent = ({ selectDate }: Props) => {
  const [isAddRowMode, setIsAddRowMode] = useState<boolean>(false);

  const {
    logs,
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
    const date = dayjs().format('YYYY-MM-DD');
    getLogs(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-gray-400 p-2 rounded h-full">
      <DetailHeader selectDate={selectDate} />
      <DetailLogTable
        isAddRowMode={isAddRowMode}
        setIsAddRowMode={setIsAddRowMode}
        logs={logs}
        category={category}
        place={place}
        money={money}
        handleChangeCategory={handleChangeCategory}
        handleChangePlace={handleChangePlace}
        handleChangeMoney={handleChangeMoney}
        submit={submit}
      />
      <DetailActions
        isAddRowMode={isAddRowMode}
        setIsAddRowMode={setIsAddRowMode}
        submit={submit}
      />
    </div>
  );
};
