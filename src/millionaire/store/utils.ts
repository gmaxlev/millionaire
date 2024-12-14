import { MillionaireTaskState } from './types';

export default function calculateTaskStatus(task: MillionaireTaskState) {
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
  };
}
