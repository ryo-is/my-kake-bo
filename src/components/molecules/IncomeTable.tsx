import { IncomeTableHeader } from '@molecules/IncomeTableHeader';

export const IncomeTable = () => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <IncomeTableHeader />
      </table>
    </div>
  );
};
