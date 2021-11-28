import { Dispatch, SetStateAction } from 'react';
import { SaveIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import { IUseDetailData } from '@hooks/useDetailData';
import { IUseDate } from '@hooks/useDate';
import { Button } from '@atoms/Button';
import { Select } from '@atoms/Select';
import { Input } from '@atoms/Input';
import { useLogs } from '@hooks/useLogs';

type Props = {
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

const options = [
  { value: '', text: '' },
  { value: 'food', text: '食費' },
  { value: 'miscellaneous', text: '雑費' },
  { value: 'eatingout', text: '外食' },
  { value: 'other', text: 'その他' },
];

export const DetailTableNewRow = ({
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
  const { getLogs } = useLogs();

  const handleSaveClick = async () => {
    await setLog(selectDate.format('YYYY-MM-DD'));
    await getLogs(selectDate.format('YYYY-MM-DD'));
    setIsAddRowMode(false);
  };

  const handleCancel = () => {
    setIsAddRowMode(false);
    clearValues();
  };

  return (
    <tr className="text-sm">
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
        <Button handleClick={handleSaveClick} addClass="text-gray-700">
          <SaveIcon className="w-6 h-6" />
        </Button>
        <Button handleClick={handleCancel} addClass="text-gray-700">
          <XCircleIcon className="w-6 h-6" />
        </Button>
      </td>
    </tr>
  );
};
