import { logSelectors } from '@recoil/logState';
import { TimelineSection } from '@molecules/TimelineSection';

export const TimelineContent = () => {
  const logs = logSelectors.useLogs();

  return (
    <div className="border border-gray-400 rounded h-timeline overflow-y-scroll p-4">
      {Object.keys(logs).map((key) => (
        <TimelineSection date={key} logs={logs[key]} key={key} />
      ))}
    </div>
  );
};
