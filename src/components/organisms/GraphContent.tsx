import { GraphHeader } from '@molecules/GraphHeader';
import { GraphChartArea } from '@molecules/GraphChartArea';
import { useState } from 'react';

export const GraphContent = () => {
  const [mode, setMode] = useState<'past' | 'now'>('now');

  return (
    <div className="h-5/12 pt-1">
      <div className="border border-gray-400 rounded h-full p-2 relative">
        <GraphHeader mode={mode} setMode={setMode} />
        <GraphChartArea mode={mode} />
      </div>
    </div>
  );
};
