import { MillionaireState } from '../types';
import selectTasksWithStatus from './selectTasksWithStatus';

export default function selectReward(state: MillionaireState) {
  const tasksWithStatus = selectTasksWithStatus(state);

  if (!tasksWithStatus) {
    return 0;
  }

  const found = [...tasksWithStatus].reverse().find((task) => {
    const { isWin } = task.status;

    return isWin;
  });

  return found ? found.task.reward.value : 0;
}
