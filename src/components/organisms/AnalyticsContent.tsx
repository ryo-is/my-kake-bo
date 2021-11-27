import { AnalyticsHeader } from '@molecules/AnalyticsHeader';
import { AnalyticsData } from '@molecules/AnalyticsData';

export const AnalyticsContent = () => {
  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      <AnalyticsHeader />
      <AnalyticsData />
    </div>
  );
};
