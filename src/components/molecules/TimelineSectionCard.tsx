import clsx from 'clsx';
import { Log } from '@recoil/logState';
import { categories } from '@hooks/useDetailData';

interface TimelineSectionCardProps {
  log: Log;
}

export const TimelineSectionCard = ({ log }: TimelineSectionCardProps) => {
  const categoryText = (value: string) => {
    const idx = categories.findIndex((c) => c.value === value);
    if (idx >= 0) {
      return categories[idx].text;
    }
    return '';
  };

  const cardColor = (type: string) => {
    if (type === 'in') {
      return 'border-blue-300 bg-blue-100';
    }
    return 'border-red-300 bg-red-100';
  };

  return (
    <div
      className={clsx(
        'rounded shadow-sm p-2 border my-2 last:mt-2 text-sm',
        cardColor(log.type)
      )}
    >
      <div className="mb-1">{categoryText(log.category)}</div>
      <div>{log.money.toLocaleString()}円</div>
    </div>
  );
};
