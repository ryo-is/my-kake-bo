import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface IUseDate {
  selectMonth: Dayjs;
  selectDate: Dayjs;
  selectDetailDate: (date: Dayjs) => void;
}

export const useDate = (): IUseDate => {
  const dateNumber = dayjs().get('date');

  const [selectMonth, setSelectMonth] = useState(
    dateNumber >= 25 ? dayjs().add(1, 'M').startOf('M') : dayjs().startOf('M')
  );
  const [selectDate, setSelectDate] = useState(dayjs());

  const selectDetailDate = (date: Dayjs) => {
    if (date.format('YYYY-MM-DD') !== selectDate.format('YYYY-MM-DD')) {
      setSelectDate(date);

      if (date.get('date') >= 25) {
        setSelectMonth(date.add(1, 'M').startOf('M'));
      } else {
        setSelectMonth(date);
      }
    }
  };

  return {
    selectMonth,
    selectDate,
    selectDetailDate,
  };
};
