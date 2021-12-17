import { Dispatch, memo, SetStateAction } from 'react';
import { IncomeTableHeader } from '@molecules/IncomeTableHeader';
import { IncomeTableBody } from '@molecules/IncomeTableBody';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

const IncomeTableBase = ({ isAddRowMode, setIsAddRowMode }: Props) => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <IncomeTableHeader setIsAddRowMode={setIsAddRowMode} />
        <IncomeTableBody
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
        />
      </table>
    </div>
  );
};

export const IncomeTable = memo(IncomeTableBase);
