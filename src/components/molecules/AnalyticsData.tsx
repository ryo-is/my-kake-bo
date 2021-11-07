import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

export const AnalyticsData = () => {
  const { analyticsData } = useSelector((state: RootState) => state.logs);

  return (
    <>
      {analyticsData && (
        <>
          <AnalyticsDataRow category="food" value={analyticsData.food} />
          <AnalyticsDataRow
            category="miscellaneous"
            value={analyticsData.miscellaneous}
          />
          <AnalyticsDataRow category="other" value={analyticsData.other} />
          <div className="w-full border-b-2 border-gray-400" />
          <AnalyticsDataRow category="total" value={analyticsData.total} />
        </>
      )}
    </>
  );
};
