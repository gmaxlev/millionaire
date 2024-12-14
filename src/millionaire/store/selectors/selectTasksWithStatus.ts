import { MillionaireState } from '../types';
import calculateTaskStatus from '../utils';

export default function selectTasksWithStatus(state: MillionaireState) {
  if (!state.tasks) {
    return null;
  }

  return state.tasks.map((task, index, arr) => ({
    task,
    status: {
      ...calculateTaskStatus(task),
      isFirstTask: index === 0,
      isLastTask: index === arr.length - 1,
    },
  }));
}
