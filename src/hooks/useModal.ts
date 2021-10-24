import { Dispatch, SetStateAction, useState } from 'react';

export interface IUseModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return {
    isModalOpen,
    setIsModalOpen,
  };
};
