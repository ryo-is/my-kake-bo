import { useState, ChangeEvent } from 'react';

export interface IUseDetailData {
  category: string;
  place: string;
  money: number;
  handleChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleChangePlace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeMoney: (event: ChangeEvent<HTMLInputElement>) => void;
  submit: () => Promise<void>;
}

export const useDetailData = (): IUseDetailData => {
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

  return {
    category,
    place,
    money,
    handleChangeCategory,
    handleChangePlace,
    handleChangeMoney,
    submit,
  };
};
