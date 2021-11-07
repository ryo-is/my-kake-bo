import { AnalyticsContent } from '@organisms/AnalyticsContent';
import { IUseDate } from '@hooks/useDate';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const Analytics = ({ selectDate }: Props) => {
  return (
    <div className="w-full mt-6">
      <AnalyticsContent selectDate={selectDate} />
    </div>
  );
};
