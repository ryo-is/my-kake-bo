import { IUseDate } from '@hooks/useDate';
import { IUseModal } from '@hooks/useModal';
import { DetailHeader } from '@molecules/DetailHeader';
import { DetailLogTable } from '@molecules/DetailLogTable';

type Props = {
  selectDate: IUseDate['selectDate'];
  setIsModalOpen: IUseModal['setIsModalOpen'];
};

export const DetailContent = ({ selectDate, setIsModalOpen }: Props) => {
  return (
    <div className="border border-gray-400 p-2 rounded h-full">
      <DetailHeader selectDate={selectDate} setIsModalOpen={setIsModalOpen} />
      <DetailLogTable />
    </div>
  );
};
