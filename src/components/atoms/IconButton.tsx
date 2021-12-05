import { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';

type Props = {
  children: ReactNode;
  handleClick: () => void;
  addClass?: string;
  tipText: string;
};

export const IconButton = ({
  children,
  handleClick,
  addClass,
  tipText,
}: Props) => {
  return (
    <button
      className={
        'text-xs text-gray-100 px-2 py-2 flex items-center hover:bg-gray-200 rounded-full ' +
        addClass
      }
      onClick={handleClick}
      data-tip={tipText}
    >
      {children}
      <ReactTooltip effect="solid" type="dark" place="bottom" />
    </button>
  );
};
