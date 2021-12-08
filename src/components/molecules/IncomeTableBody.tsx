import { Dispatch, SetStateAction } from 'react';
import { IncomeTableRow } from '@molecules/IncomeTableRow';
import { IncomeTableNewRow } from '@molecules/IncomeTableNewRow';
import { incomeSelectors } from '@recoil/incomeState';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

export const IncomeTableBody = ({ isAddRowMode, setIsAddRowMode }: Props) => {
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
