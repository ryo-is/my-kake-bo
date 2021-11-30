import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { IUseDate } from '@hooks/useDate';

export const IncomeTotalArea = () => {
  const { incomes } = useSelector((state: RootState) => state.incomes);

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
