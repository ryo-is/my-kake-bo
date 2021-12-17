import { Dispatch, memo, SetStateAction } from 'react';
import { IncomeTableRow } from '@molecules/IncomeTableRow';
import { IncomeTableNewRow } from '@molecules/IncomeTableNewRow';
import { incomeSelectors } from '@recoil/incomeState';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

const IncomeTableBodyBase = ({ isAddRowMode, setIsAddRowMode }: Props) => {
  const incomes = incomeSelectors.useIncomes();

  return (
    <tbody>
      {incomes.map((i) => (
        <IncomeTableRow key={i.docID} income={i} />
      ))}
      {isAddRowMode && <IncomeTableNewRow setIsAddRowMode={setIsAddRowMode} />}
    </tbody>
  );
};

export const IncomeTableBody = memo(IncomeTableBodyBase);
