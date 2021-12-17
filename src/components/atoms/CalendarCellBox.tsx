import { ReactNode, memo } from 'react';

type Props = {
  children: ReactNode;
  addClass?: string;
};

const CalendarCellBoxBase = ({ children, addClass }: Props) => {
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

export const CalendarCellBox = memo(CalendarCellBoxBase);
