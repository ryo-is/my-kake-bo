import { TableCol } from '@atoms/TableCol';

export const DetailTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="25%" text="カテゴリー" />
        <TableCol width="45%" text="場所" />
        <TableCol width="30%" text="金額" />
      </tr>
    </thead>
  );
};
