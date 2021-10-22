import { TableCol } from '@atoms/TableCol';

export const DetailLogTableRow = () => {
  return (
    <tr className="border-b border-gray-400 text-sm">
      <TableCol width="20%" text="食費" addClass="pl-1" />
      <TableCol width="25%" text="スーパー" />
      <TableCol width="20%" text="2,000円" />
      <TableCol
        width="35%"
        text="めもめもめもめもめもめもめもめもめも"
        addClass="pr-1"
      />
    </tr>
  );
};
