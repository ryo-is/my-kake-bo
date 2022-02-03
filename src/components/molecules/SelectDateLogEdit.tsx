import { useState, Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import { useDetailData } from '@hooks/useDetailData';
import { DetailLogTable } from '@molecules/DetailLogTable';
import { IconButton } from '@atoms/IconButton';
import { XIcon } from '@heroicons/react/solid';

interface SelectDateLogEditProps {
  selectDate: Dayjs;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SelectDateLogEdit = ({
  selectDate,
  setIsOpen,
}: SelectDateLogEditProps) => {
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
    <div className="relative p-4">
      <div className="text-xl">{selectDate.format('YYYY-MM-DD')}の収支</div>
      <IconButton
        handleClick={() => setIsOpen(false)}
        addClass="text-gray-700 absolute top-2 right-2"
        tipText="閉じる"
      >
        <XIcon className="w-6 h-6" />
      </IconButton>
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
    </div>
  );
};
