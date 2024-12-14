import { MillionaireState } from '../types';

export default function selectTasks(state: MillionaireState) {
  return state.tasks;
}
