import { IUseDate } from '@hooks/useDate';
import { IUseModal } from '@hooks/useModal';
import { DetailContent } from '@organisms/DetailContent';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const Detail = ({ selectDate }: Props) => {
  return (
    <div className="w-1/3 p-6">
      <DetailContent selectDate={selectDate} />
    </div>
  );
};
