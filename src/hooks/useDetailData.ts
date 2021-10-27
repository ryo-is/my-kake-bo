import { useState, ChangeEvent } from 'react';
import { apiHelper } from '@infrastructures/helper';

type Log = {
  log_uuid: string;
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
  submit: () => Promise<void>;
  getLogs: () => Promise<void>;
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

  const submit = async () => {
    console.log('submit', category, place, money);
    return Promise.resolve();
  };

  const getLogs = async () => {
    try {
      const logs = await apiHelper.get<Log[]>({
        path: '/api/logs',
      });
      setLogs(logs);
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
    submit,
    getLogs,
  };
};
