import { IUseDate } from '@hooks/useDate';
import { DetailContent } from '@organisms/DetailContent';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const Detail = ({ selectDate }: Props) => {
  return <DetailContent selectDate={selectDate} />;
};
