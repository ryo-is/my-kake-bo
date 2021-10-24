import { TableCol } from '@atoms/TableCol';

export const DetailLogTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-gray-400 text-sm">
        <TableCol width="20%" text="カテゴリー" addClass="pl-1" />
        <TableCol width="25%" text="場所" />
        <TableCol width="20%" text="金額" />
        <TableCol width="35%" text="メモ" addClass="pr-1" />
      </tr>
    </thead>
  );
};
