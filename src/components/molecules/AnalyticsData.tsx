import { AnalyticsDataRow } from '@molecules/AnalyticsDataRow';
import { IUseAnalyticsData } from '@hooks/useAnalyticsData';

type Props = {
  analyticsData: IUseAnalyticsData['analyticsData'];
};

export const AnalyticsData = ({ analyticsData }: Props) => {
  return (
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
  );
};
