import { memo } from 'react';
import { IUseDate } from '@hooks/useDate';

type Props = {
  selectDate: IUseDate['selectDate'];
};

const DetailHeaderBase = ({ selectDate }: Props) => {
  return (
    <div className="flex items-center px-2 pt-2">
      <div className="text-xl flex-1">
        💸 {selectDate.format('YYYY/MM/DD')}の支出
      </div>
    </div>
  );
};

export const DetailHeader = memo(DetailHeaderBase);
