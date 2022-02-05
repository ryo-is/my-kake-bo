// import { AnalyticsHeader } from '@molecules/AnalyticsHeader';
import { AnalyticsData } from '@molecules/AnalyticsData';
import { AnalyticsCalcArea } from '@molecules/AnalyticsCalcArea';

export const AnalyticsContent = () => {
  return (
    <div className="border border-gray-400 p-4 rounded h-full">
      {/* <AnalyticsHeader /> */}
      <div className="flex">
        <AnalyticsData />
        <AnalyticsCalcArea />
      </div>
    </div>
  );
};
