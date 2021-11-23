import { TableCol } from '@atoms/TableCol';

export const DetailTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="25%" text="カテゴリー" />
        <TableCol width="35%" text="場所" />
        <TableCol width="20%" text="金額" />
        <TableCol width="20%" text="編集・削除" />
      </tr>
    </thead>
  );
};
