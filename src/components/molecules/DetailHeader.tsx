import { IUseDate } from '@hooks/useDate';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailHeader = ({ selectDate }: Props) => {
  return (
    <div className="text-xl pl-2 pt-2">{selectDate.format('YYYY/MM/DD')}</div>
  );
};
