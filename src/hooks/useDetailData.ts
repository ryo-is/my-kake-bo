import { useState, ChangeEvent } from 'react';
import { apiHelper } from '@infrastructures/helper';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export type Log = {
  docID?: string;
  uuid: string;
  category: string;
  place: string;
  money: number;
  date: string;
};

export interface IUseDetailData {
  logs: { [date: string]: Log[] };
  category: string;
  place: string;
  money: number;
  handleChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleChangePlace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeMoney: (event: ChangeEvent<HTMLInputElement>) => void;
  clearValues: () => void;
  getLogs: (date: string) => Promise<void>;
  setLog: (date: string) => Promise<void>;
  updateLog: (log: Log) => Promise<void>;
}

export const useDetailData = (): IUseDetailData => {
  const [logs, setLogs] = useState<{
    [date: string]: Log[];
  }>({});
  const [category, setCategory] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [money, setMoney] = useState<number>(0);

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleChangePlace = (event: ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };

  const handleChangeMoney = (event: ChangeEvent<HTMLInputElement>) => {
    setMoney(Number(event.target.value));
  };

  const clearValues = () => {
    setCategory('');
    setPlace('');
    setMoney(0);
  };

  const getLogs = async (date: string) => {
    try {
      const res = await apiHelper.get<{ [date: string]: Log[] }>({
        path: `/api/logs?start=${dayjs(date)
          .startOf('M')
          .format('YYYY-MM-DD')}&end=${dayjs(date)
          .endOf('M')
          .format('YYYY-MM-DD')}`,
      });
      setLogs(res);
    } catch (e) {
      console.error(e);
    }
  };

  const setLog = async (date: string) => {
    try {
      await apiHelper.post<Log>({
        path: '/api/logs',
        body: {
          uuid: uuidv4(),
          category,
          place,
          money,
          date,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const updateLog = async (log: Log) => {
    try {
      await apiHelper.put<Log>({
        path: '/api/logs',
        body: log,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    logs,
    category,
    place,
    money,
    handleChangeCategory,
    handleChangePlace,
    handleChangeMoney,
    clearValues,
    getLogs,
    setLog,
    updateLog,
  };
};
