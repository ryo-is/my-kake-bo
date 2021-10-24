import { IUseModal } from '@hooks/useModal';
import { Overlay } from '@molecules/Overlay';
import { ModalSheet } from '@molecules/ModalSheet';

type Props = IUseModal;

export const ModalContent = ({ isModalOpen, setIsModalOpen }: Props) => {
  return (
    <>
      {isModalOpen && (
        <div className="absolute w-screen h-screen flex items-center justify-center">
          <Overlay setIsModalOpen={setIsModalOpen} />
          <ModalSheet
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
    </>
  );
};
