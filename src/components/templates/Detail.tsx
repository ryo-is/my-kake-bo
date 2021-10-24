import { IUseDate } from '@hooks/useDate';
import { IUseModal } from '@hooks/useModal';
import { DetailContent } from '@organisms/DetailContent';

type Props = {
  selectDate: IUseDate['selectDate'];
  setIsModalOpen: IUseModal['setIsModalOpen'];
};

export const Detail = ({ selectDate, setIsModalOpen }: Props) => {
  return (
    <div className="w-1/3 p-6">
      <DetailContent selectDate={selectDate} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
