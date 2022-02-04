import { apiHelper } from '@infrastructures/helper';
import { useSetRecoilState } from 'recoil';
import { logState, Log } from '@recoil/logState';

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
      const analyticsData = {
        food: 0,
        miscellaneous: 0,
        eatingout: 0,
        credit: 0,
        bank: 0,
        total: 0,
        income: 0,
      };
      Object.keys(logs).forEach((key) => {
        const log = logs[key];
        log.forEach((l) => {
          analyticsData[
            l.category as
              | 'food'
              | 'miscellaneous'
              | 'eatingout'
              | 'credit'
              | 'bank'
          ] += l.money;
          if (l.type === 'out') {
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
