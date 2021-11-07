import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { logsSlice, Log } from '@store/logs';
import { apiHelper } from '@infrastructures/helper';
import dayjs from 'dayjs';

export interface IUseLogs {
  getLogs: (date: string) => Promise<void>;
}

export const useLogs = (): IUseLogs => {
  const dispatch = useDispatch();
  const logs = useSelector((state: RootState) => state.logs);

  const getLogs = async (date: string) => {
    try {
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${dayjs(date)
          .startOf('M')
          .format('YYYY-MM-DD')}&end=${dayjs(date)
          .endOf('M')
          .format('YYYY-MM-DD')}`,
      });
      dispatch(logsSlice.actions.update(res));
    } catch (e) {
      console.error(e);
    }
  };

  return { getLogs };
};
