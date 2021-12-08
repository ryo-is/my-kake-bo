import { AnalyticsCalcRow } from '@molecules/AnalyticsCalcRow';
import { logSelectors } from '@recoil/logState';
import { incomeSelectors } from '@recoil/incomeState';

export const AnalyticsCalcArea = () => {
  const analyticsData = logSelectors.useAnalytics();
  const incomes = incomeSelectors.useIncomes();

  const calcTotalValue = () => {
    if (!incomes) {
      return 0;
    }
    let total = 0;
    incomes.forEach((income) => (total += income.value));
    return total;
  };

  const calcDiffValue = () => {
    return calcTotalValue() - analyticsData.total;
  };

  return (
    <div className="w-1/2 ml-10">
      <div className="pl-2">今月の収入と支出</div>
      <div className="w-full border-b border-gray-400 mt-2" />
      <AnalyticsCalcRow labelKey="income" value={calcTotalValue()} />
      <AnalyticsCalcRow labelKey="expense" value={analyticsData.total} />
      <div className="w-full border-b-2 border-gray-400" />
      <AnalyticsCalcRow labelKey="diff" value={calcDiffValue()} />
    </div>
  );
};
