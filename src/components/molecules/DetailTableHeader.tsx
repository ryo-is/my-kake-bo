import { TableCol } from '@atoms/TableCol';

export const DetailTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="25%" text="カテゴリー" />
        <TableCol width="40%" text="場所" />
        <TableCol width="25%" text="金額" />
        <TableCol width="10%" text="" />
      </tr>
    </thead>
  );
};
