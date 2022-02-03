import { VFC, useEffect } from 'react';
import { useDate } from '@hooks/useDate';
import { usePeriods } from '@hooks/usePeriods';
import { SideMenu } from '@templates/SideMenu';
import { Calendar } from '@templates/Calendar';
import { Analytics } from '@templates/Analytics';

const Index: VFC<{}> = () => {
  const { selectDate, selectDetailDate } = useDate();
  const { getPeriods } = usePeriods();

  useEffect(() => {
    getPeriods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen h-screen flex flex-wrap min-w-screen w-screen bg-gray-100 overflow-y-scroll">
      <div className="w-sidemenu fixed h-screen">
        <SideMenu />
      </div>
      <div className="w-maincontent flex m-maincontent">
        <div className="w-2/3 py-3 pl-3 pr-0">
          <Calendar selectDetailDate={selectDetailDate} />
          <Analytics />
        </div>
        <div className="w-1/3 p-3"></div>
      </div>
    </div>
  );
};

export default Index;
