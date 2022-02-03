import { ChangeEvent, memo, useEffect, useState } from 'react';
import { SaveIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import { Log } from '@recoil/logState';
import { IconButton } from '@atoms/IconButton';
import { Select } from '@atoms/Select';
import { Input } from '@atoms/Input';
import { categories } from '@hooks/useDetailData';

type Props = {
  log: Log;
  handleUpdateClick: (log: Log) => void;
  handleCancel: () => void;
};

const DetailTableEditRowBase = ({
  log,
  handleUpdateClick,
  handleCancel,
}: Props) => {
  const [category, setCategory] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [money, setMoney] = useState<number>(0);

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  // const handleChangePlace = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPlace(event.target.value);
  // };

  const handleChangeMoney = (event: ChangeEvent<HTMLInputElement>) => {
    setMoney(Number(event.target.value));
  };

  const submit = () => {
    handleUpdateClick({
      ...log,
      category,
      place,
      money,
    });
  };

  useEffect(() => {
    setCategory(log.category);
    setPlace(log.place);
    setMoney(log.money);
  }, [log]);

  return (
    <tr className="text-sm">
      <td width="25%" className="py-2 px-1 border-b border-gray-400">
        <Select
          value={category}
          onChange={handleChangeCategory}
          options={categories}
        />
      </td>
      {/* <td width="40%" className="py-2 px-1 border-b border-gray-400">
        <Input value={place} onChange={handleChangePlace} />
      </td> */}
      <td width="25%" className="py-2 px-1 border-b border-gray-400">
        <Input value={money} onChange={handleChangeMoney} />
      </td>
      <td className="py-2 border-b border-gray-400">
        <div className="flex justify-center">
          <IconButton
            handleClick={submit}
            addClass="text-gray-700"
            tipText="保存"
          >
            <SaveIcon className="w-6 h-6" />
          </IconButton>
          <IconButton
            handleClick={handleCancel}
            addClass="text-gray-700"
            tipText="戻る"
          >
            <XCircleIcon className="w-6 h-6" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

export const DetailTableEditRow = memo(DetailTableEditRowBase);
