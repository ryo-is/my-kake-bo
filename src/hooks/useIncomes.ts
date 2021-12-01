import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { incomeSlice, Income } from '@store/incomes';
import { apiHelper } from '@infrastructures/helper';

export interface IUseIncomes {
  getIncomes: (date: string) => Promise<void>;
  setIncome: (p: { label: string; value: number }) => Promise<void>;
}

export const useIncomes = (): IUseIncomes => {
  const dispatch = useDispatch();

  const getIncomes = async (date: string) => {
    try {
      const dateNumber = dayjs(date).get('date');
      const start =
        dateNumber < 25
          ? dayjs(date).subtract(1, 'M').format('YYYY-MM-25')
          : dayjs(date).format('YYYY-MM-25');
      const end =
        dateNumber < 25
          ? dayjs(date).format('YYYY-MM-24')
          : dayjs(date).add(1, 'M').format('YYYY-MM-24');
      const { incomes } = await apiHelper.get<{ incomes: Income[] }>({
        path: `/api/incomes?start=${start}&end=${end}`,
      });
      dispatch(incomeSlice.actions.update(incomes));
    } catch (e) {
      console.error(e);
    }
  };

  const setIncome = async ({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) => {
    try {
      await apiHelper.post<Income>({
        path: '/api/incomes',
        body: { label, value, date: dayjs().format('YYYY-MM-DD') },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { getIncomes, setIncome };
};
