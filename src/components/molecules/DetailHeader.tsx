import { IUseDate } from '@hooks/useDate';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailHeader = ({ selectDate }: Props) => {
  return <div>{selectDate.format('YYYY-MM-DD')}</div>;
};
