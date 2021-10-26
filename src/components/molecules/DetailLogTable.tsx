import { DetailTableHeader } from '@molecules/DetailTableHeader';
import { DetailTableBody } from '@molecules/DetailTableBody';
import { IUseDetailData } from '@hooks/useDetailData';

type Props = {
  isAddRowMode: boolean;
  category: IUseDetailData['category'];
  place: IUseDetailData['place'];
  money: IUseDetailData['money'];
  handleChangeCategory: IUseDetailData['handleChangeCategory'];
  handleChangePlace: IUseDetailData['handleChangePlace'];
  handleChangeMoney: IUseDetailData['handleChangeMoney'];
};

export const DetailLogTable = ({
  isAddRowMode,
  category,
  place,
  money,
  handleChangeCategory,
  handleChangePlace,
  handleChangeMoney,
}: Props) => {
  return (
    <div className="px-3 pt-5">
      <table className="w-full table-fixed">
        <DetailTableHeader />
        <DetailTableBody
          isAddRowMode={isAddRowMode}
          category={category}
          place={place}
          money={money}
          handleChangeCategory={handleChangeCategory}
          handleChangePlace={handleChangePlace}
          handleChangeMoney={handleChangeMoney}
        />
      </table>
    </div>
  );
};
