import { apiHelper } from '@infrastructures/helper';
import { useSetRecoilState } from 'recoil';
import { periodState, Period } from '@recoil/periodState';

export interface IUsePeriods {
  getPeriods: () => Promise<void>;
}

export const usePeriods = (): IUsePeriods => {
  const setState = useSetRecoilState(periodState);

  const getPeriods = async () => {
    try {
      // const { periods } = await apiHelper.get<{ periods: Period[] }>({
      //   path: 'api/periods',
      // });
      const periods: Period[] = [
        {
          docID: '1',
          name: '1月',
          startDate: '2021-12-24',
          endDate: '2022-01-24',
        },
        {
          docID: '2',
          name: '2月',
          startDate: '2022-01-25',
          endDate: '2022-02-24',
        },
        {
          docID: '3',
          name: '3月',
          startDate: '2022-02-25',
          endDate: '2022-03-24',
        },
        {
          docID: '4',
          name: '4月',
          startDate: '2022-03-25',
          endDate: '2022-04-24',
        },
        {
          docID: '5',
          name: '5月',
          startDate: '2022-04-25',
          endDate: '2022-05-24',
        },
        {
          docID: '6',
          name: '6月',
          startDate: '2022-05-25',
          endDate: '2022-06-23',
        },
        {
          docID: '7',
          name: '7月',
          startDate: '2022-06-24',
          endDate: '2022-07-24',
        },
        {
          docID: '8',
          name: '8月',
          startDate: '2022-07-25',
          endDate: '2022-08-24',
        },
        {
          docID: '9',
          name: '9月',
          startDate: '2022-08-25',
          endDate: '2022-09-22',
        },
        {
          docID: '10',
          name: '10月',
          startDate: '2022-09-24',
          endDate: '2022-10-24',
        },
        {
          docID: '11',
          name: '11月',
          startDate: '2022-10-25',
          endDate: '2022-11-24',
        },
        {
          docID: '12',
          name: '12月',
          startDate: '2022-11-25',
          endDate: '2022-12-23',
        },
      ];
      setState({
        periods,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { getPeriods };
};
