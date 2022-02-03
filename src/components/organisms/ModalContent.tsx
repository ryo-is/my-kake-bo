import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Overlay } from '@molecules/Overlay';
import { ModalSheet } from '@molecules/ModalSheet';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export const ModalContent = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: Props) => {
  return (
    <>
      {isModalOpen && (
        <div className="absolute w-screen h-screen flex items-center justify-center top-0 left-0">
          <Overlay setIsModalOpen={setIsModalOpen} />
          <ModalSheet>{children}</ModalSheet>
        </div>
      )}
    </>
  );
};
