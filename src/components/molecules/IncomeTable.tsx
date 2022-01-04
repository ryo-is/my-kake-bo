import { Dispatch, memo, SetStateAction } from 'react';
import { IncomeTableHeader } from '@molecules/IncomeTableHeader';
import { IncomeTableBody } from '@molecules/IncomeTableBody';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

const IncomeTableBase = ({ isAddRowMode, setIsAddRowMode }: Props) => {
  return (
    <div className="px-3 pt-1 h-40 overflow-y-scroll">
      <table className="w-full border-separate border-spacing-0">
        <IncomeTableHeader
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
        />
        <IncomeTableBody
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
        />
      </table>
    </div>
  );
};

export const IncomeTable = memo(IncomeTableBase);
