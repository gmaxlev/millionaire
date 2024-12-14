import { MillionaireState } from '../types';

export default function selectCurrency(state: MillionaireState) {
  return state.currency;
}
