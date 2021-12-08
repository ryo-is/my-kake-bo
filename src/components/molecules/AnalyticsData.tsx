import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import { logSelectors } from '@recoil/logState';

export const AnalyticsData = () => {
  const analyticsData = logSelectors.useAnalytics();

  return (
    <>
      {analyticsData && (
        <div className="w-1/2">
          <div className="pl-2">今月の支出内訳</div>
          <div className="w-full border-b border-gray-400 mt-2" />
          <AnalyticsDataRow category="food" value={analyticsData.food} />
          <AnalyticsDataRow
            category="miscellaneous"
            value={analyticsData.miscellaneous}
          />
          <AnalyticsDataRow
            category="eatingout"
            value={analyticsData.eatingout}
          />
          <AnalyticsDataRow category="other" value={analyticsData.other} />
          <div className="w-full border-b-2 border-gray-400" />
          <AnalyticsDataRow category="total" value={analyticsData.total} />
        </div>
      )}
    </>
  );
};
