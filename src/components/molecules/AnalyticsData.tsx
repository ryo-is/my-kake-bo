import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

export const AnalyticsData = () => {
  const { analyticsData } = useSelector((state: RootState) => state.logs);

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
