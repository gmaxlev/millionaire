import { MillionaireState } from '../types';
import selectTaskStatus from './selectTaskStatus';

export default function selectStatus(state: MillionaireState) {
  return selectTaskStatus(state, state.currentTaskIndex);
}
