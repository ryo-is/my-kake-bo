import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface IUseDate {
  selectDate: Dayjs;
  prevMonth: () => void;
  nextMonth: () => void;
}

export const useDate = (): IUseDate => {
  const [selectDate, setSelectDate] = useState(dayjs());

  const prevMonth = () => {
    setSelectDate((prev) => dayjs(prev).subtract(1, 'M'));
  };

  const nextMonth = () => {
    setSelectDate((prev) => dayjs(prev).add(1, 'M'));
  };

  return { selectDate, prevMonth, nextMonth };
};
