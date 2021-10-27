import { TableCol } from '@atoms/TableCol';
import { Log } from '@hooks/useDetailData';

type Props = {
  log: Log;
};

export const DetailTableRow = ({ log }: Props) => {
  const getCategory = () => {
    const categories: { [k: string]: string } = {
      food: '食費',
      miscellaneous: '雑費',
      other: 'その他',
      total: '合計',
    };
    return categories[log.category] ? categories[log.category] : '';
  };

  const getMoney = () => {
    return log.money.toLocaleString() + '円';
  };

  return (
    <tr className="border-b border-gray-400 text-sm">
      <TableCol width="25%" text={getCategory()} />
      <TableCol width="45%" text={log.place} />
      <TableCol width="30%" text={getMoney()} />
    </tr>
  );
};
