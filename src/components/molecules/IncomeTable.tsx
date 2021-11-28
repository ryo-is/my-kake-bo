import { IncomeTableHeader } from '@molecules/IncomeTableHeader';
import { IncomeTableBody } from '@molecules/IncomeTableBody';

export const IncomeTable = () => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <IncomeTableHeader />
        <IncomeTableBody />
      </table>
    </div>
  );
};
