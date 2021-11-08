import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  addClass?: string;
};

export const CalendarCellBox = ({ children, addClass }: Props) => {
  return (
    <div
      className={
        'border-b border-l border-gray-400 w-1/7 flex justify-center items-center ' +
        addClass
      }
    >
      {children}
    </div>
  );
};
