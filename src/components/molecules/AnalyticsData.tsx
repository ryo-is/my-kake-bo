import { memo } from 'react';
import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import { logSelectors } from '@recoil/logState';

const AnalyticsDataBase = () => {
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
          <AnalyticsDataRow category="credit" value={analyticsData.credit} />
          <AnalyticsDataRow category="bank" value={analyticsData.bank} />
          <div className="w-full border-b-2 border-gray-400" />
          <AnalyticsDataRow category="total" value={analyticsData.total} />
        </div>
      )}
    </>
  );
};

export const AnalyticsData = memo(AnalyticsDataBase);
