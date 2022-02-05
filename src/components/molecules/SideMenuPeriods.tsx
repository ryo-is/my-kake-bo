import { periodSelectors } from '@recoil/periodState';
import { SideMenuPeriodItem } from '@molecules/SideMenuPeriodItem';

export const SideMenuPeriods = () => {
  const periods = periodSelectors.usePeriodSelector();

  return (
    <div className="pt-3">
      {periods.map((p) => (
        <SideMenuPeriodItem period={p} key={p.docID} />
      ))}
    </div>
  );
};
