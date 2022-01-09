import dynamic from 'next/dynamic';

type Props = {
  mode: 'past' | 'now';
};

const BarChart = dynamic(
  () => import('./GraphBarChart').then((mod: any) => mod.GraphBarChart),
  {
    ssr: false,
  }
);

const LineChart = dynamic(
  () => import('./GraphLineChart').then((mod: any) => mod.GraphLineChart),
  {
    ssr: false,
  }
);

export const GraphChartArea = ({ mode }: Props) => {
  return (
    <div className="h-5/6 text-sm">
      {mode === 'now' ? <LineChart /> : <BarChart />}
    </div>
  );
};
