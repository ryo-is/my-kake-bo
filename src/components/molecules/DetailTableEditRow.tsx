import { ChangeEvent, useEffect, useState } from 'react';
import { SaveIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import { Log } from '@hooks/useDetailData';
import { Button } from '@atoms/Button';
import { Select } from '@atoms/Select';
import { Input } from '@atoms/Input';

type Props = {
  log: Log;
  handleUpdateClick: (log: Log) => void;
  handleCancel: () => void;
};

const options = [
  { value: '', text: '' },
  { value: 'food', text: '食費' },
  { value: 'miscellaneous', text: '雑費' },
  { value: 'other', text: 'その他' },
];

export const DetailTableEditRow = ({
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

  const handleChangePlace = (event: ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };

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
    <tr className="text-sm border-b border-gray-400">
      <td width="25%" className="py-2 px-1">
        <Select
          value={category}
          onChange={handleChangeCategory}
          options={options}
        />
      </td>
      <td width="40%" className="py-2 px-1">
        <Input value={place} onChange={handleChangePlace} />
      </td>
      <td width="25%" className="py-2 px-1">
        <Input value={money} onChange={handleChangeMoney} />
      </td>
      <td className="py-2 flex justify-center">
        <Button
          handleClick={submit}
          addClass="text-gray-700 hover:bg-gray-200 rounded-full"
        >
          <SaveIcon className="w-6 h-6" />
        </Button>
        <Button
          handleClick={handleCancel}
          addClass="text-gray-700 hover:bg-gray-200 rounded-full"
        >
          <XCircleIcon className="w-6 h-6" />
        </Button>
      </td>
    </tr>
  );
};
