import dynamic from 'next/dynamic';

const BarChart = dynamic(
  () => import('./GraphBarChart').then((mod: any) => mod.GraphBarChart),
  {
    ssr: false,
  }
);

export const GraphChartArea = () => {
  return (
    <div className="h-5/6 text-sm">
      <BarChart />
    </div>
  );
};
