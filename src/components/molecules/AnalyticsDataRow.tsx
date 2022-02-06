import { memo } from 'react';
import { categories } from '@hooks/useDetailData';

type Props = {
  category: string;
  value: number;
};

const AnalyticsDataRowBase = ({ category, value }: Props) => {
  const categoryText = () => {
    if (category === 'total') {
      return '合計';
    }
    const idx = categories.findIndex((c) => c.value === category);
    if (idx >= 0) {
      return categories[idx].text;
    }
    return '';
  };

  return (
    <div className="p-1 flex text-sm">
      <div className="mx-2 w-36">{categoryText()}</div>
      <div>{value.toLocaleString()}円</div>
    </div>
  );
};

export const AnalyticsDataRow = memo(AnalyticsDataRowBase);
