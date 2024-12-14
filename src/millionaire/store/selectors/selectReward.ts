import { MillionaireState } from '../types';
import selectTasks from './selectTasks';
import selectTaskStatus from './selectTaskStatus';

export default function selectReward(state: MillionaireState) {
  const tasks = selectTasks(state);

  if (!tasks) {
    return 0;
  }

  const found = [...tasks].reverse().find((task, index, arr) => {
    const { isWin } = selectTaskStatus(state, arr.length - index - 1);

    return isWin;
  });

  return found ? found.reward.value : 0;
}
