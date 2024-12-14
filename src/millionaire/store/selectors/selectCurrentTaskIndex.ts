import { MillionaireState } from '../types';

export default function selectCurrentTaskIndex(state: MillionaireState) {
  return state.currentTaskIndex;
}
