type Props = {
  labelKey: 'income' | 'expense';
  value: number;
};

export const AnalyticsCalcRow = ({ labelKey, value }: Props) => {
  const labels = {
    income: '収入',
    expense: '支出',
  };

  return (
    <div className="p-2 flex text-lg">
      <div className="mx-2 w-24">{labels[labelKey]}</div>
      <div>{value.toLocaleString()}円</div>
    </div>
  );
};
