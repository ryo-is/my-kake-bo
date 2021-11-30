import { useState } from 'react';
import { IncomesHeader } from '@molecules/IncomesHeader';
import { IncomeTable } from '@molecules/IncomeTable';

export const IncomesContent = () => {
  const [isAddRowMode, setIsAddRowMode] = useState<boolean>(false);

  return (
    <div className="h-1/2 pt-3">
      <div className="border border-gray-400 rounded h-full p-2">
        <IncomesHeader />
        <IncomeTable
          isAddRowMode={isAddRowMode}
          setIsAddRowMode={setIsAddRowMode}
        />
      </div>
    </div>
  );
};
