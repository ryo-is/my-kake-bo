import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { AnalyticsCalcRow } from '@molecules/AnalyticsCalcRow';

export const AnalyticsCalcArea = () => {
  const { analyticsData } = useSelector((state: RootState) => state.logs);
  const { incomes } = useSelector((state: RootState) => state.incomes);

  const calcTotalValue = () => {
    if (!incomes) {
      return 0;
    }
    let total = 0;
    incomes.forEach((income) => (total += income.value));
    return total;
  };

  return (
    <div className="w-1/3 ml-6">
      <AnalyticsCalcRow labelKey="income" value={calcTotalValue()} />
      <AnalyticsCalcRow labelKey="expense" value={analyticsData.total} />
    </div>
  );
};
