import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface IUseDate {
  selectMonth: Dayjs;
  selectDate: Dayjs;
  prevMonth: () => void;
  nextMonth: () => void;
  selectDetailDate: (date: Dayjs) => void;
}

export const useDate = (): IUseDate => {
  const [selectMonth, setSelectMonth] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const prevMonth = () => {
    setSelectMonth((prev) => dayjs(prev).subtract(1, 'M'));
  };

  const nextMonth = () => {
    setSelectMonth((prev) => dayjs(prev).add(1, 'M'));
  };

  const selectDetailDate = (date: Dayjs) => {
    setSelectDate(date);
    setSelectMonth(date);
  };

  return { selectMonth, selectDate, prevMonth, nextMonth, selectDetailDate };
};
