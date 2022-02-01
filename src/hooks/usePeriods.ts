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
      const { periods } = await apiHelper.get<{ periods: Period[] }>({
        path: 'api/periods',
      });
      setState({
        periods,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { getPeriods };
};
