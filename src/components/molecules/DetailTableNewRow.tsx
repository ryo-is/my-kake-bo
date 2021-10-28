import { Dispatch, SetStateAction } from 'react';
import { SaveIcon } from '@heroicons/react/solid';
import { IUseDetailData } from '@hooks/useDetailData';
import { Button } from '@atoms/Button';
import { Select } from '@atoms/Select';
import { Input } from '@atoms/Input';

type Props = {
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
  submit: IUseDetailData['submit'];
};

const options = [
  { value: '', text: '' },
  { value: 'food', text: '食費' },
  { value: 'miscellaneous', text: '雑費' },
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
  submit,
}: Props) => {
  const handleSaveClick = async () => {
    await submit();
    setIsAddRowMode(false);
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
      <td width="25%" className="py-2">
        <Button handleClick={handleSaveClick} addClass="text-gray-700">
          <SaveIcon className="w-6 h-6" />
        </Button>
      </td>
    </tr>
  );
};
