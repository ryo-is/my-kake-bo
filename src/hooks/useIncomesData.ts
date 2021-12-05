import { apiHelper } from '@infrastructures/helper';
import { useState, ChangeEvent } from 'react';
import { Income } from '@store/incomes';
import dayjs from 'dayjs';

export interface IUseIncomesData {
  label: string;
  value: number;
  handleChangeLabel: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  clearValues: () => void;
  setIncome: () => Promise<void>;
}

export const useIncomesData = (): IUseIncomesData => {
  const [label, setLabel] = useState<string>('');
  const [value, setValue] = useState<number>(0);

  const handleChangeLabel = (event: ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const clearValues = () => {
    setLabel('');
    setValue(0);
  };

  const setIncome = async () => {
    try {
      await apiHelper.post<Income>({
        path: 'api/incomes',
        body: {
          label,
          value,
          date: dayjs().format('YYYY-MM-DD'),
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    label,
    value,
    handleChangeLabel,
    handleChangeValue,
    clearValues,
    setIncome,
  };
};
