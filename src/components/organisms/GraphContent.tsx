import { GraphHeader } from '@molecules/GraphHeader';
import { GraphChartArea } from '@molecules/GraphChartArea';

export const GraphContent = () => {
  return (
    <div className="h-5/12 pt-1">
      <div className="border border-gray-400 rounded h-full p-2 relative">
        <GraphHeader />
        <GraphChartArea />
      </div>
    </div>
  );
};
