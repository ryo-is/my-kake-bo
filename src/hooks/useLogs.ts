import { apiHelper } from '@infrastructures/helper';
import { useSetRecoilState } from 'recoil';
import {
  logState,
  Log,
  AnalyticsData,
  initialAnalyticsData,
} from '@recoil/logState';

export interface IUseLogs {
  getLogs: (p: { start: string; end: string }) => Promise<void>;
}

export const useLogs = (): IUseLogs => {
  const setState = useSetRecoilState(logState);

  const getLogs = async ({ start, end }: { start: string; end: string }) => {
    try {
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${start}&end=${end}`,
      });

      const logs = res;
      const analyticsData = { ...initialAnalyticsData };
      Object.keys(logs).forEach((key) => {
        const log = logs[key];
        log.forEach((l) => {
          if (l.type === 'out') {
            analyticsData[l.category as keyof AnalyticsData] += l.money;
            analyticsData.total += l.money;
          } else {
            analyticsData.income += l.money;
          }
        });
      });
      setState({
        logs,
        analyticsData,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { getLogs };
};
