import { MillionaireState } from '../types';
import selectTasks from './selectTasks';

export default function selectTaskStatus(state: MillionaireState, taskIndex: number) {
  const tasks = selectTasks(state);

  if (!tasks) {
    return {
      isWin: false,
      isLose: false,
      isCompleted: false,
      isLastTask: false,
    };
  }

  const task = tasks[taskIndex];

  const isLastTask = taskIndex === tasks.length - 1;

  const correctOptions = task.options.filter((option) => option.isCorrect);

  const incorrectOptions = task.options.filter((option) => !option.isCorrect);

  const isEveryCorrectAnswerSelected = correctOptions.every(
    (option) => option.isSelected,
  );

  const isSomeIncorrectAnswerSelected = incorrectOptions.some(
    (optionId) => optionId.isSelected,
  );

  const isWin = isEveryCorrectAnswerSelected && !isSomeIncorrectAnswerSelected;
  const isLose = isSomeIncorrectAnswerSelected;
  const isCompleted = isWin || isLose;

  return {
    isWin,
    isLose,
    isCompleted,
    isLastTask,
  };
}
