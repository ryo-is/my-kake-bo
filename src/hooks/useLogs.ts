import { useDispatch } from 'react-redux';
import { logsSlice, Log } from '@store/logs';
import { apiHelper } from '@infrastructures/helper';
import dayjs from 'dayjs';

export interface IUseLogs {
  getLogs: (date: string) => Promise<void>;
}

export const useLogs = (): IUseLogs => {
  const dispatch = useDispatch();

  const getLogs = async (date: string) => {
    try {
      const start = dayjs(date).subtract(1, 'M').format('YYYY-MM-25');
      const end = dayjs(date).format('YYYY-MM-24');
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${start}&end=${end}`,
      });
      dispatch(logsSlice.actions.update(res));
    } catch (e) {
      console.error(e);
    }
  };

  return { getLogs };
};
