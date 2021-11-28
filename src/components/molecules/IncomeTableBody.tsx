import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { IncomeTableRow } from '@molecules/IncomeTableRow';

export const IncomeTableBody = () => {
  const { incomes } = useSelector((state: RootState) => state.incomes);

  return (
    <tbody>
      {incomes.map((i) => (
        <IncomeTableRow key={i.docID} income={i} />
      ))}
    </tbody>
  );
};
