import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { IUseDate } from '@hooks/useDate';
import { logSelectors } from '@recoil/logState';

type Props = {
  selectDate: IUseDate['selectDate'];
};

export const DetailTotalArea = ({ selectDate }: Props) => {
  const logs = logSelectors.useLogs();

  const calcTotalValue = () => {
    const log = logs[dayjs(selectDate).format('YYYY-MM-DD')];
    if (!log) {
      return '0円';
    }
    let total = 0;
    log.forEach((l) => (total += l.money));
    return `${total.toLocaleString()}円`;
  };

  return (
    <div className="absolute left-3 bottom-3">
      <span>合計：</span>
      <strong>{calcTotalValue()}</strong>
    </div>
  );
};