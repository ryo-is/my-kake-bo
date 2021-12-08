import { incomeSelectors } from '@recoil/incomeState';

export const IncomeTotalArea = () => {
  const incomes = incomeSelectors.useIncomes();

  const calcTotalValue = () => {
    if (!incomes) {
      return '0円';
    }
    let total = 0;
    incomes.forEach((income) => (total += income.value));
    return `${total.toLocaleString()}円`;
  };

  return (
    <div className="absolute left-3 bottom-3">
      <span>合計：</span>
      <strong>{calcTotalValue()}</strong>
    </div>
  );
};
