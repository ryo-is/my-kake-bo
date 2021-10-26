import { ChangeEvent, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
};

export const DetailTableNewRow = ({
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
}: Props) => {
  return (
    <tr className="text-sm">
      <td width="25%" className="py-2 px-1">
        <div className="inline-block relative w-full">
          <select
            className="block appearance-none w-full bg-gray-50 border-2 border-gray-400 p-1 rounded-sm leading-tight focus:outline-none cursor-pointer"
            value={category}
            onChange={(e) => handleChangeCategory(e)}
          >
            <option value=""></option>
            <option value="food">食費</option>
            <option value="miscellaneous">雑費</option>
            <option value="other">その他</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
            <ChevronDownIcon className="fill-current h-4 w-4" />
          </div>
        </div>
      </td>
      <td width="45%" className="py-2 px-1">
        <input
          type="text"
          className="w-full appearance-none leading-tight focus:outline-none p-1 bg-gray-50 border-2 border-gray-400 rounded-sm"
          value={place}
          onChange={(e) => handleChangePlace(e)}
        />
      </td>
      <td width="30%" className="py-2 px-1">
        <input
          type="text"
          className="w-full appearance-none leading-tight focus:outline-none p-1 bg-gray-50 border-2 border-gray-400 rounded-sm"
          value={money}
          onChange={(e) => handleChangeMoney(e)}
        />
      </td>
    </tr>
  );
};
