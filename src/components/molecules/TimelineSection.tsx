import { Log } from '@recoil/logState';
import { TimelineSectionCard } from '@molecules/TimelineSectionCard';

interface TimelineSectionProps {
  date: string;
  logs: Log[];
}

export const TimelineSection = ({ date, logs }: TimelineSectionProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="border-l-4 border-gray-500 pl-2">{date}</div>
      {logs.map((l) => (
        <TimelineSectionCard log={l} key={l.docID} />
      ))}
    </div>
  );
};
