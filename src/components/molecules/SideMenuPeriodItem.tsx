import clsx from 'clsx';
import dayjs from 'dayjs';
import { Period } from '@recoil/periodState';
import { selectedPeriodStates } from '@recoil/selectedPeriodState';

interface SideMenuPeriodItemProps {
  period: Period;
}

export const SideMenuPeriodItem = ({ period }: SideMenuPeriodItemProps) => {
  const { docID, name, startDate, endDate } = period;
  const [selectedPeriod, setSelectedPeriod] =
    selectedPeriodStates.useSelectedPeriodState();

  const selectPeriod = () => {
    localStorage.setItem('latestSelectedPeriodID', period.docID || '0');
    setSelectedPeriod(period);
  };

  const selectedPeriodBgColor = () => {
    return docID === selectedPeriod.docID && 'bg-gray-700';
  };

  return (
    <div
      className={clsx(
        'pl-5 py-3 flex items-center hover:bg-gray-700 cursor-pointer',
        selectedPeriodBgColor()
      )}
      onClick={selectPeriod}
    >
      <div>{name}</div>
      <div className="text-xs px-1 text-gray-400">{`${dayjs(startDate).format(
        'MM/DD'
      )}-${dayjs(endDate).format('MM/DD')}`}</div>
    </div>
  );
};
