import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface IUseDate {
  selectMonth: Dayjs;
  selectDate: Dayjs;
  prevMonth: () => void;
  nextMonth: () => void;
  selectDetailDate: (date: Dayjs) => void;
  selectToday: (date: Dayjs) => void;
}

export const useDate = (): IUseDate => {
  const dateNumber = dayjs().get('date');

  const [selectMonth, setSelectMonth] = useState(
    dateNumber >= 25 ? dayjs().add(1, 'M').startOf('M') : dayjs().startOf('M')
  );
  const [selectDate, setSelectDate] = useState(dayjs());

  const prevMonth = () => {
    setSelectMonth((prev) => dayjs(prev).subtract(1, 'M'));
  };

  const nextMonth = () => {
    setSelectMonth((prev) => dayjs(prev).add(1, 'M'));
  };

  const selectDetailDate = (date: Dayjs) => {
    setSelectDate(date);

    if (date.get('date') >= 25) {
      setSelectMonth(date.add(1, 'M').startOf('M'));
    } else {
      setSelectMonth(date);
    }
  };

  const selectToday = (date: Dayjs) => {
    setSelectDate(date);

    if (date.get('date') >= 25) {
      setSelectMonth(date.add(1, 'M').startOf('M'));
    } else {
      setSelectMonth(date);
    }
  };

  return {
    selectMonth,
    selectDate,
    prevMonth,
    nextMonth,
    selectDetailDate,
    selectToday,
  };
};
