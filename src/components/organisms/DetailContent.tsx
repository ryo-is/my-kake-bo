import { IUseDate } from '@hooks/useDate';
import { DetailHeader } from '@molecules/DetailHeader';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailContent = ({ selectDate }: Props) => {
  return (
    <div className="border border-gray-400 p-2 rounded h-full">
      <DetailHeader selectDate={selectDate} />
    </div>
  );
};
