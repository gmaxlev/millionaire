import { MillionaireState } from '../types';

export default function selectCurrentTask(state: MillionaireState) {
  const task = state.tasks?.[state.currentTaskIndex];

  if (!task) {
    return null;
  }

  return task;
}
