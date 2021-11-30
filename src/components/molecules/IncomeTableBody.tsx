import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { IncomeTableRow } from '@molecules/IncomeTableRow';

type Props = {
  isAddRowMode: boolean;
  setIsAddRowMode: Dispatch<SetStateAction<boolean>>;
};

export const IncomeTableBody = ({}: Props) => {
  const { incomes } = useSelector((state: RootState) => state.incomes);

  return (
    <tbody>
      {incomes.map((i) => (
        <IncomeTableRow key={i.docID} income={i} />
      ))}
    </tbody>
  );
};
