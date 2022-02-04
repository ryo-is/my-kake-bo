import { AnalyticsCalcRow } from '@molecules/AnalyticsCalcRow';
import { logSelectors } from '@recoil/logState';
import { memo, useCallback } from 'react';

export const AnalyticsCalcAreaBase = () => {
  const analyticsData = logSelectors.useAnalytics();

  const calcDiffValue = useCallback(() => {
    return analyticsData.income - analyticsData.total;
  }, [analyticsData]);

  return (
    <div className="w-1/2 ml-10">
      <div className="pl-2">今月の収入と支出</div>
      <div className="w-full border-b border-gray-400 mt-2" />
      <AnalyticsCalcRow labelKey="income" value={analyticsData.income} />
      <AnalyticsCalcRow labelKey="expense" value={analyticsData.total} />
      <div className="w-full border-b-2 border-gray-400" />
      <AnalyticsCalcRow labelKey="diff" value={calcDiffValue()} />
    </div>
  );
};

export const AnalyticsCalcArea = memo(AnalyticsCalcAreaBase);
