import { apiHelper } from '@infrastructures/helper';
import dayjs from 'dayjs';
import { useSetRecoilState } from 'recoil';
import { logState, Log } from '@recoil/logState';

export interface IUseLogs {
  getLogs: (date: string) => Promise<void>;
}

export const useLogs = (): IUseLogs => {
  const setState = useSetRecoilState(logState);

  const getLogs = async (date: string) => {
    try {
      const dateNumber = dayjs(date).get('date');
      const start =
        dateNumber < 25
          ? dayjs(date).subtract(1, 'M').format('YYYY-MM-25')
          : dayjs(date).format('YYYY-MM-25');
      const end =
        dateNumber < 25
          ? dayjs(date).format('YYYY-MM-24')
          : dayjs(date).add(1, 'M').format('YYYY-MM-24');
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${start}&end=${end}`,
      });

      const logs = res;
      const analyticsData = {
        food: 0,
        miscellaneous: 0,
        other: 0,
        eatingout: 0,
        total: 0,
      };
      Object.keys(logs).forEach((key) => {
        const log = logs[key];
        log.forEach((l) => {
          analyticsData[
            l.category as 'food' | 'miscellaneous' | 'eatingout' | 'other'
          ] += l.money;
          analyticsData.total += l.money;
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
