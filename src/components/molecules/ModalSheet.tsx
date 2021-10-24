import { IUseModal } from '@hooks/useModal';

type Props = IUseModal;

export const ModalSheet = ({}: Props) => {
  return (
    <div className="absolute z-20 p-4 bg-gray-100 rounded">modal sheet</div>
  );
};
