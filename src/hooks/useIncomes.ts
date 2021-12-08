import dayjs from 'dayjs';
import { Income } from '@recoil/incomeState';
import { apiHelper } from '@infrastructures/helper';
import { useSetRecoilState } from 'recoil';
import { incomeState } from '@recoil/incomeState';

export interface IUseIncomes {
  getIncomes: (date: string) => Promise<void>;
  setIncome: (p: { label: string; value: number }) => Promise<void>;
  updateIncome: (p: Income) => Promise<void>;
  deleteIncome: (docID: string) => Promise<void>;
}

export const useIncomes = (): IUseIncomes => {
  const setState = useSetRecoilState(incomeState);

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

      setState({ incomes });
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

  const updateIncome = async (income: Income) => {
    try {
      await apiHelper.put<Income>({
        path: '/api/incomes',
        body: income,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteIncome = async (docID: string) => {
    try {
      await apiHelper.delete({
        path: `/api/incomes?docID=${docID}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { getIncomes, setIncome, updateIncome, deleteIncome };
};
