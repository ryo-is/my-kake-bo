import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CalendarDayBox = (props: Props) => {
  const { children } = props;

  return (
    <div className="border-b border-l border-gray-400 w-1/7 flex justify-center items-center">
      {children}
    </div>
  );
};
