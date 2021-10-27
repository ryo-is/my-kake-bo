import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';

export const AnalyticsData = () => {
  return (
    <>
      <AnalyticsDataRow category="food" value={10000} />
      <AnalyticsDataRow category="miscellaneous" value={5000} />
      <AnalyticsDataRow category="other" value={20000} />
      <div className="w-full border-b-2 border-gray-400" />
      <AnalyticsDataRow category="total" value={35000} />
    </>
  );
};
