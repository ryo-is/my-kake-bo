import { selectedPeriodStates } from '@recoil/selectedPeriodState';

export const TimelineContent = () => {
  const [selectedPeriod] = selectedPeriodStates.useSelectedPeriodState();

  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      <div className="font-bold">{selectedPeriod.name}のタイムライン</div>
    </div>
  );
};
