import { MillionaireState } from '../types';
import selectCurrentTask from './selectCurrentTask';

export default function selectOptions(state: MillionaireState) {
  const currentTask = selectCurrentTask(state);

  if (!currentTask) {
    return null;
  }

  return currentTask.options;
}
