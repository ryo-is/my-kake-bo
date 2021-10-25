import { DetailTableHeader } from '@molecules/DetailTableHeader';
import { DetailTableBody } from '@molecules/DetailTableBody';

export const DetailLogTable = () => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <DetailTableHeader />
        <DetailTableBody />
      </table>
    </div>
  );
};
