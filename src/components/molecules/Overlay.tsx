import { IUseModal } from '@hooks/useModal';

type Props = {
  setIsModalOpen: IUseModal['setIsModalOpen'];
};

export const Overlay = ({ setIsModalOpen }: Props) => {
  const onClickOverlay = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="absolute bg-black opacity-80 z-10 top-0 left-0 w-screen h-screen"
      onClick={onClickOverlay}
    />
  );
};
