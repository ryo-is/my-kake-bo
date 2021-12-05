import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from '@atoms/Input';
import { IconButton } from '@atoms/IconButton';
import { SaveIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import { useIncomes } from '@hooks/useIncomes';
import dayjs from 'dayjs';

type Props = {
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

export const IncomeTableNewRow = ({ setIsAddRowMode }: Props) => {
  const [label, setLabel] = useState<string>('');
  const [value, setValue] = useState<number>(0);

  const { getIncomes, setIncome } = useIncomes();

  const clear = () => {
    setLabel('');
    setValue(0);
  };

  const handleSaveClick = async () => {
    await setIncome({
      label,
      value,
    });
    await getIncomes(dayjs().format('YYYY-MM-DD'));
    clear();
    setIsAddRowMode(false);
  };

  const handleCancel = () => {
    clear();
    setIsAddRowMode(false);
  };

  return (
    <tr className="text-sm">
      <td className="py-2 px-1">
        <Input
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
      </td>
      <td className="py-2 px-1">
        <Input
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </td>
      <td className="py-2 flex justify-center">
        <IconButton
          handleClick={handleSaveClick}
          addClass="text-gray-700"
          tipText="保存"
        >
          <SaveIcon className="w-6 h-6" />
        </IconButton>
        <IconButton
          handleClick={handleCancel}
          addClass="text-gray-700"
          tipText="キャンセル"
        >
          <XCircleIcon className="w-6 h-6" />
        </IconButton>
      </td>
    </tr>
  );
};
