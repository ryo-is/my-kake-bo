import { useEffect, useState } from 'react';
import { Input } from '@atoms/Input';
import { IconButton } from '@atoms/IconButton';
import { SaveIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import { Income } from '@store/incomes';

type Props = {
  income: Income;
  handleUpdateClick: (income: Income) => void;
  handleCancel: () => void;
};

export const IncomeTableEditRow = ({
  income,
  handleUpdateClick,
  handleCancel,
}: Props) => {
  const [label, setLabel] = useState<string>('');
  const [value, setValue] = useState<number>(0);

  const submit = () => {
    handleUpdateClick({
      ...income,
      label,
      value,
    });
  };

  useEffect(() => {
    setLabel(income.label);
    setValue(income.value);
  }, [income]);

  return (
    <tr className="text-sm border-b border-gray-400">
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
      </td>
    </tr>
  );
};
