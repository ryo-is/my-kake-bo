import { IncomesHeader } from '@molecules/IncomesHeader';
import { IncomeTable } from '@molecules/IncomeTable';

export const IncomesContents = () => {
  return (
    <div className="h-1/2 pt-3">
      <div className="border border-gray-400 rounded h-full p-2">
        <IncomesHeader />
        <IncomeTable />
      </div>
    </div>
  );
};
