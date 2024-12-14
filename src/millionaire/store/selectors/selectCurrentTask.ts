import { MillionaireState } from '../types';
import selectTasksWithStatus from './selectTasksWithStatus';

export default function selectCurrentTask(state: MillionaireState) {
  const tasksWithStatus = selectTasksWithStatus(state);

  if (!tasksWithStatus) {
    return null;
  }

  return tasksWithStatus[state.currentTaskIndex];
}
