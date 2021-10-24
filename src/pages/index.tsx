import type { NextPage } from 'next';
import { useDate } from '@hooks/useDate';
import { useModal } from '@hooks/useModal';
import { Calendar } from '@templates/Calendar';
import { Detail } from '@templates/Detail';
import { Analytics } from '@templates/Analytics';
import { Modal } from '@templates/Modal';

const Index: NextPage = () => {
  const { selectMonth, selectDate, prevMonth, nextMonth, selectDetailDate } =
    useDate();
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100">
      <div className="w-2/3 py-6 pl-6 pr-0">
        <Calendar
          selectMonth={selectMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          selectDetailDate={selectDetailDate}
        />
        <Analytics />
      </div>
      <Detail selectDate={selectDate} setIsModalOpen={setIsModalOpen} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Index;
