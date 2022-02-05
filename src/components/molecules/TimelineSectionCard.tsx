import clsx from 'clsx';
import { Log } from '@recoil/logState';

interface TimelineSectionCardProps {
  log: Log;
}

export const TimelineSectionCard = ({ log }: TimelineSectionCardProps) => {
  const categoryToString = (value: string) => {
    switch (value) {
      case 'food':
        return '食費';
      case 'miscellaneous':
        return '雑費';
      case 'eatingout':
        return '外食';
      case 'credit':
        return 'クレジットカード';
      case 'bank':
        return '銀行引き落とし';
      case 'ryoIncome':
        return 'りょう 収入';
      case 'shiIncome':
        return 'しほ 収入';
      default:
        return '';
    }
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
      <div className="mb-1">{categoryToString(log.category)}</div>
      <div>{log.money.toLocaleString()}円</div>
    </div>
  );
};
