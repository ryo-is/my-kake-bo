// import { Button } from '@atoms/Button';
// import { PlusIcon } from '@heroicons/react/solid';
import { periodSelectors } from '@recoil/periodState';
import { SideMenuPeriodItem } from '@molecules/SideMenuPeriodItem';

export const SideMenuPeriods = () => {
  const periods = periodSelectors.usePeriodSelector();

  // const handleClick = () => {};

  return (
    <div className="pt-3">
      {periods.map((p) => (
        <SideMenuPeriodItem period={p} key={p.docID} />
      ))}
      {/* <div className="pl-5 pt-2">
        <Button
          handleClick={handleClick}
          addClass="border border-gray-600 hover:bg-gray-700 mr-0 my-0"
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>期間を追加</span>
        </Button>
      </div> */}
    </div>
  );
};
