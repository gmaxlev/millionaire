import useMillionaireState from '@/millionaire/hooks/useMillionaireState';
import clsx from 'clsx';
import {
  useCallback, useLayoutEffect, useState,
} from 'react';
import MillionaireTasks from '../MillionaireTasks/MillionaireTasks';
import MillionaireTask from '../MillionaireTask/MillionaireTask';
import styles from './MillionaireGame.module.css';
import MillionaireHeader from '../MillionaireHeader/MillionaireHeader';
import MillionaireGameOver from '../MillionaireGameOver/MillionaireGameOver';
import MillionaireGameStart from '../MillionaireGameStart/MillionaireGameStart';

export default function MillionaireGame() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const {
    currenctTask,
    tasks,
    currenctTaskIndex,
    currency,
    isGameOver,
    reward,
    isStart,
    onSwitchTask,
    onAnswer,
    onRestart,
    onStart,
  } = useMillionaireState();

  const [isShowGameOver, setIsShowGameOver] = useState(false);

  useLayoutEffect(() => {
    if (isGameOver) {
      const timerId = setTimeout(() => {
        setIsShowGameOver(true);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }

    setIsShowGameOver(false);

    return () => {};
  }, [isGameOver]);

  const onClickTask = useCallback((index: number) => {
    onSwitchTask(index);
    setIsOpenMenu(false);
  }, [onSwitchTask]);

  const onFadeOutAnimationEnd = () => {
    onSwitchTask(currenctTaskIndex + 1);
  };

  const options = currenctTask ? currenctTask.task.options : null;

  const isDisabled = isGameOver;

  if (!currenctTask || !options || !tasks || !currency) {
    return null;
  }

  if (!isStart) {
    return <MillionaireGameStart onStart={onStart} />;
  }

  if (isShowGameOver) {
    return <MillionaireGameOver reward={reward} currency={currency} onRestart={onRestart} />;
  }

  return (
    <div className={clsx(styles.game)}>
      <MillionaireHeader onToggleMenu={setIsOpenMenu} isOpen={isOpenMenu} disabled={isDisabled} />
      <MillionaireTask
        key={currenctTask.task.id}
        taskWithStatus={currenctTask}
        options={options}
        onAnswer={onAnswer}
        disabled={isDisabled}
        onFadeOutAnimationEnd={onFadeOutAnimationEnd}
      />
      <MillionaireTasks
        tasks={tasks}
        currenctTaskIndex={currenctTaskIndex}
        isOpen={isOpenMenu}
        onClick={onClickTask}
        disabled={isDisabled}
      />
    </div>
  );
}
