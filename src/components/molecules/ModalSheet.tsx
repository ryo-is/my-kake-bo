import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const ModalSheet = ({ children }: Props) => {
  return (
    <div className="absolute z-20 bg-gray-100 rounded w-2/5">{children}</div>
  );
};
