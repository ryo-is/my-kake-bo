import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  handleClick: () => void;
  addClass?: string;
};

export const Button = ({ children, handleClick, addClass }: Props) => {
  return (
    <button
      className={
        'text-xs text-gray-100 px-2 py-2 rounded flex items-center ' + addClass
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
