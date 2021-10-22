import { DetailLogTableHeader } from '@molecules/DetailLogTableHeader';
import { DetailLogTableBody } from '@molecules/DetailLogTableBody';

export const DetailLogTable = () => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full">
        <DetailLogTableHeader />
        <DetailLogTableBody />
      </table>
    </div>
  );
};
