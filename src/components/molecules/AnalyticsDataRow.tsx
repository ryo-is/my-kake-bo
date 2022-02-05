import { memo } from 'react';

type Props = {
  category:
    | 'food'
    | 'miscellaneous'
    | 'eatingout'
    | 'credit'
    | 'bank'
    | 'total';
  value: number;
};

const AnalyticsDataRowBase = ({ category, value }: Props) => {
  const categories = {
    food: '食費',
    miscellaneous: '雑費',
    eatingout: '外食',
    credit: 'クレジットカード',
    bank: '銀行引き落とし',
    total: '合計',
  };

  return (
    <div className="p-2 flex">
      <div className="mx-2 w-36">{categories[category]}</div>
      <div>{value.toLocaleString()}円</div>
    </div>
  );
};

export const AnalyticsDataRow = memo(AnalyticsDataRowBase);
