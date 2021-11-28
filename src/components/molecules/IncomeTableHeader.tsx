import { TableCol } from '@atoms/TableCol';

export const IncomeTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="40%" text="収入源" />
        <TableCol width="40%" text="金額" />
        <TableCol width="20%" text="" />
      </tr>
    </thead>
  );
};
