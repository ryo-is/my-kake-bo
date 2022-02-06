import { memo } from 'react';
import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import {
  logSelectors,
  AnalyticsData as AnalyticsDataType,
} from '@recoil/logState';

const AnalyticsDataBase = () => {
  const analyticsData = logSelectors.useAnalytics();

  return (
    <>
      {analyticsData && (
        <div className="w-1/2">
          <div className="pl-2">今月の支出内訳</div>
          <div className="w-full border-b border-gray-400 mt-2 mb-1" />
          {Object.keys(analyticsData).map((key) => {
            if (!(key === 'income' || key === 'total')) {
              return (
                <AnalyticsDataRow
                  category={key}
                  value={analyticsData[key as keyof AnalyticsDataType]}
                  key={key}
                />
              );
            }
          })}
          <div className="w-full border-b border-gray-700" />
          <AnalyticsDataRow category="total" value={analyticsData.total} />
        </div>
      )}
    </>
  );
};

export const AnalyticsData = memo(AnalyticsDataBase);
