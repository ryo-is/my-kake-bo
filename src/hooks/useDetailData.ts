import { useState, ChangeEvent } from 'react';
import { apiHelper } from '@infrastructures/helper';
import { Log } from '@recoil/logState';

export const categories = [
  { value: '', text: '', type: 'out' },
  { value: 'food', text: '食費', type: 'out' },
  { value: 'miscellaneous', text: '雑費', type: 'out' },
  { value: 'eatingout', text: '外食', type: 'out' },
  { value: 'credit', text: 'クレジットカード', type: 'out' },
  { value: 'utility', text: '光熱費', type: 'out' },
  { value: 'water', text: '水道', type: 'out' },
  { value: 'mobile', text: '携帯電話', type: 'out' },
  { value: 'rent', text: '家賃', type: 'out' },
  { value: 'insurance', text: '保険', type: 'out' },
  { value: 'ryoIncome', text: 'りょう 収入', type: 'in' },
  { value: 'shiIncome', text: 'しほ 収入', type: 'in' },
];

export interface IUseDetailData {
  category: string;
  place: string;
  money: number;
  handleChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleChangePlace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeMoney: (event: ChangeEvent<HTMLInputElement>) => void;
  clearValues: () => void;
  setLog: (date: string) => Promise<void>;
  updateLog: (log: Log) => Promise<void>;
  deleteLog: (docID: string) => Promise<void>;
}

export const useDetailData = (): IUseDetailData => {
  const [category, setCategory] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [money, setMoney] = useState<number>(0);
  const [type, setType] = useState<string>('');

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const type = categories.find((c) => c.value === value)?.type;
    if (type) {
      setType(type);
    }
    setCategory(value);
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

  const setLog = async (date: string) => {
    try {
      await apiHelper.post<Log>({
        path: '/api/logs',
        body: {
          category,
          place,
          money,
          date,
          type,
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

  const deleteLog = async (docID: string) => {
    try {
      await apiHelper.delete({
        path: `/api/logs?docID=${docID}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    category,
    place,
    money,
    handleChangeCategory,
    handleChangePlace,
    handleChangeMoney,
    clearValues,
    setLog,
    updateLog,
    deleteLog,
  };
};
