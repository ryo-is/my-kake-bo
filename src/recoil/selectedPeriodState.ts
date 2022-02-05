import { atom, SetterOrUpdater, useRecoilState } from 'recoil';
import { RecoilAtomKeys } from './keys';

export type SelectedPeriod = {
  docID?: string;
  name: string;
  startDate: string;
  endDate: string;
};

type SeletedPeriodStates = {
  useSelectedPeriodState: () => [
    SelectedPeriod,
    SetterOrUpdater<SelectedPeriod>
  ];
};

const initialState: SelectedPeriod = {
  name: '',
  startDate: '',
  endDate: '',
};

export const selectedPeriodState = atom<SelectedPeriod>({
  key: RecoilAtomKeys.SELECTED_PERIOD_STATE,
  default: initialState,
});

export const selectedPeriodStates: SeletedPeriodStates = {
  useSelectedPeriodState: () => useRecoilState(selectedPeriodState),
};
