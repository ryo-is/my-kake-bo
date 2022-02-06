import { memo } from 'react';

type Props = {
  labelKey: 'income' | 'expense' | 'diff';
  value: number;
};

const AnalyticsCalcRowBase = ({ labelKey, value }: Props) => {
  const labels = {
    income: '収入',
    expense: '支出',
    diff: '差分',
  };

  return (
    <div className="p-1 flex text-sm">
      <div className="mx-2 w-24">{labels[labelKey]}</div>
      <div>{value.toLocaleString()}円</div>
    </div>
  );
};

export const AnalyticsCalcRow = memo(AnalyticsCalcRowBase);
