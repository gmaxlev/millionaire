'use client';

import useMillionaireState from '@/millionaire/hooks/useMillionaireState';
import MillionaireTasks from '../MillionaireTasks/MillionaireTasks';
import MillionaireReward from '../MillionaireReward/MillionaireReward';
import MillionaireTask from '../MillionaireTask/MillionaireTask';

export default function MillionaireGame() {
  const {
    currenctTask,
    options,
    tasks,
    currenctTaskIndex,
    reward,
    currency,
    isCompleted,
    isLose,
    isLastTask,
    isDisabled,
    onAnswer,
  } = useMillionaireState();

  if (!currenctTask || !options || !tasks || !currency) {
    return null;
  }

  if (isLose || (isLastTask && isCompleted)) {
    return <MillionaireReward reward={reward} currency={currency} />;
  }

  return (
    <div>
      <MillionaireTask
        task={currenctTask}
        options={options}
        onAnswer={onAnswer}
        disabled={isDisabled}
      />
      <hr />
      <MillionaireTasks tasks={tasks} currenctTaskIndex={currenctTaskIndex} />
    </div>
  );
}
