import { IUseDate } from '@hooks/useDate';
import { CalendarContent } from '@organisms/CalendarContent';

type Props = { selectDetailDate: IUseDate['selectDetailDate'] };

export const Calendar = ({ selectDetailDate }: Props) => {
  return (
    <div>
      <CalendarContent selectDetailDate={selectDetailDate} />
    </div>
  );
};
