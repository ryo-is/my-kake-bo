import { useEffect } from 'react';
import { incomeSelectors } from '@recoil/incomeState';
import { logSelectors } from '@recoil/logState';
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';

const demoChartData = [
  { name: '2021-08', income: 432100, spending: 210000 },
  { name: '2021-09', income: 432100, spending: 210000 },
  { name: '2021-10', income: 432100, spending: 210000 },
  { name: '2021-11', income: 432100, spending: 210000 },
  { name: '2021-12', income: 420000, spending: 230000 },
  { name: '2022-01', income: 450000, spending: 250000 },
];

export const GraphBarChart = () => {
  const analyticsData = logSelectors.useAnalytics();
  const incomes = incomeSelectors.useIncomes();

  useEffect(() => {
    console.log(incomes);
  }, [incomes]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        id="line-chart"
        data={demoChartData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend verticalAlign="top" height={36} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar name="収入" dataKey="income" fill="#0ea5e9" />
        <Bar name="支出" dataKey="spending" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
};
