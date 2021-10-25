import { TableCol } from '@atoms/TableCol';

export const DetailTableRow = () => {
  return (
    <tr className="border-b border-gray-400 text-sm">
      <TableCol width="25%" text="食費" />
      <TableCol width="45%" text="スーパー" />
      <TableCol width="30%" text="2,000円" />
    </tr>
  );
};
