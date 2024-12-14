import { MillionaireState } from '../types';
import selectTasksWithStatus from './selectTasksWithStatus';

export default function selectGameOver(state: MillionaireState) {
  const tasksWithStatus = selectTasksWithStatus(state);

  if (!tasksWithStatus) {
    return false;
  }

  const isEveryWin = tasksWithStatus.every((task) => {
    const { isWin } = task.status;

    return isWin;
  });

  const isSomeLose = tasksWithStatus.some((task) => {
    const { isLose } = task.status;

    return isLose;
  });

  return isEveryWin || isSomeLose;
}
