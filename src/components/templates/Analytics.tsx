import { AnalyticsContent } from '@organisms/AnalyticsContent';
import { IUseDate } from '@hooks/useDate';

type Props = {
  selectMonth: IUseDate['selectMonth'];
};

export const Analytics = ({ selectMonth }: Props) => {
  return (
    <div className="w-full mt-6">
      <AnalyticsContent selectMonth={selectMonth} />
    </div>
  );
};
