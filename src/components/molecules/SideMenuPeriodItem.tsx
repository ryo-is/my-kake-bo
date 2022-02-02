import { Period } from '@recoil/periodState';
import dayjs from 'dayjs';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';

interface SideMenuPeriodItemProps {
  period: Period;
}

export const SideMenuPeriodItem = ({ period }: SideMenuPeriodItemProps) => {
  const { name, startDate, endDate } = period;
  const [, setSelectedPeriod] = selectedPeriodStates.useSelectedPeriodState();

  const selectPeriod = () => {
    localStorage.setItem('latestSelectedPeriodID', period.docID || '0');
    setSelectedPeriod(period);
  };

  return (
    <div
      className="pl-5 py-3 flex items-center hover:bg-gray-700 cursor-pointer"
      onClick={selectPeriod}
    >
      <div>{name}</div>
      <div className="text-xs px-1 text-gray-400">{`${dayjs(startDate).format(
        'MM/DD'
      )}-${dayjs(endDate).format('MM/DD')}`}</div>
    </div>
  );
};
