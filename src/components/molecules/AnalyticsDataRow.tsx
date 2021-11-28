type Props = {
  category: 'food' | 'miscellaneous' | 'eatingout' | 'other' | 'total';
  value: number;
};

export const AnalyticsDataRow = ({ category, value }: Props) => {
  const categories = {
    food: '食費',
    miscellaneous: '雑費',
    eatingout: '外食',
    other: 'その他',
    total: '合計',
  };

  return (
    <div className="p-2 flex text-lg">
      <div className="mx-2 w-24">{categories[category]}</div>
      <div>{value.toLocaleString()}円</div>
    </div>
  );
};
