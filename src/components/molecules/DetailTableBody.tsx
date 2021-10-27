import { DetailTableRow } from '@molecules/DetailTableRow';
import { DetailTableNewRow } from '@molecules/DetailTableNewRow';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  isAddRowMode: boolean;
  logs: IUseDetailData['logs'];
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
};

export const DetailTableBody = ({
  isAddRowMode,
  logs,
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
}: Props) => {
  return (
    <tbody>
      {logs.map((l) => (
        <DetailTableRow key={l.uuid} log={l} />
      ))}
      {isAddRowMode && (
        <DetailTableNewRow
          category={category}
          place={place}
          money={money}
          handleChangeCategory={handleChangeCategory}
          handleChangePlace={handleChangePlace}
          handleChangeMoney={handleChangeMoney}
        />
      )}
    </tbody>
  );
};
