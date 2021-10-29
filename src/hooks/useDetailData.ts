import { useState, ChangeEvent } from 'react';
import { apiHelper } from '@infrastructures/helper';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export type Log = {
  uuid: string;
  category: string;
  place: string;
  money: number;
  date: string;
};

export interface IUseDetailData {
  logs: Log[];
  category: string;
  place: string;
  money: number;
  handleChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleChangePlace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeMoney: (event: ChangeEvent<HTMLInputElement>) => void;
  setLog: (date: string) => Promise<void>;
  getLogs: (date: string) => Promise<void>;
}

export const useDetailData = (): IUseDetailData => {
  const [logs, setLogs] = useState<Log[]>([]);
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

  const getLogs = async (date: string) => {
    try {
      const logs = await apiHelper.get<Log[]>({
        path: `/api/logs?date=${date}`,
      });
      setLogs(logs);
    } catch (e) {
      console.error(e);
    }
  };

  const setLog = async (date: string) => {
    try {
      await apiHelper.put<Log>({
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

  return {
    logs,
    category,
    place,
    money,
    handleChangeCategory,
    handleChangePlace,
    handleChangeMoney,
    setLog,
    getLogs,
  };
};
