import { IUseModal } from '@hooks/useModal';
import { ModalContent } from '@organisms/ModalContent';

type Props = IUseModal;

export const Modal = ({ isModalOpen, setIsModalOpen }: Props) => {
  return (
    <>
      <ModalContent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
