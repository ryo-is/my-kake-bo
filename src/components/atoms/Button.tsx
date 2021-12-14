import { ReactNode, memo } from 'react';

type Props = {
  children: ReactNode;
  handleClick: () => void;
  addClass?: string;
};

const ButtonBase = ({ children, handleClick, addClass }: Props) => {
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

export const Button = memo(ButtonBase);
