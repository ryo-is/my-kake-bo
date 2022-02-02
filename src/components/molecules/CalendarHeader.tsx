import { memo } from 'react';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';

const CalendarHeaderBase = () => {
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();

  return (
    <div className="border border-gray-400 flex py-2 px-4 items-center">
      <div className="flex-1 text-center font-bold text-lg">
        {selectedPeriod.name}
      </div>
    </div>
  );
};

export const CalendarHeader = memo(CalendarHeaderBase);
