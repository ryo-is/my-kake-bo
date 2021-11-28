import { Income } from '@store/incomes';
import { TableCol } from '@atoms/TableCol';

type Props = {
  income: Income;
};

export const IncomeTableRow = ({ income }: Props) => {
  return (
    <tr>
      <TableCol width="" text={income.label} />
      <TableCol width="" text={`${income.value.toLocaleString()}円`} />
    </tr>
  );
};
