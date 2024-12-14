'use client';

import useFetchTasks from '@/millionaire/hooks/useFetchTasks';
import useMillionaireGameReducer from '@/millionaire/hooks/useMillionaireGameReducer';
import { useCallback, useEffect, useMemo } from 'react';
import { MillionaireOption, MillionaireTask } from '@/millionaire/types';
import selectCurrentTask from '@/millionaire/store/selectors/selectCurrentTask';
import selectReward from '@/millionaire/store/selectors/selectReward';
import selectTasksWithStatus from '../store/selectors/selectTasksWithStatus';
import selectGameOver from '../store/selectors/selectGameOver';

export default function useMillionaireState() {
  const config = useFetchTasks();

  const [state, dispatch] = useMillionaireGameReducer();

  const { isStart } = state;

  const onStart = useCallback(() => {
    dispatch({ type: 'START' });
  }, [dispatch]);

  const currenctTask = useMemo(() => selectCurrentTask(state), [state]);

  const tasks = useMemo(() => selectTasksWithStatus(state), [state]);

  const currenctTaskIndex = useMemo(() => state.currentTaskIndex, [state]);

  const reward = useMemo(() => selectReward(state), [state]);

  const currency = useMemo(() => state.currency, [state]);

  const isGameOver = useMemo(() => selectGameOver(state), [state]);

  const onAnswer = (optionId: MillionaireOption['id']) => {
    dispatch({
      type: 'ANSWER',
      payload: {
        optionId,
      },
    });
  };

  const onSwitchTask = useCallback((taskId: MillionaireTask['id']) => {
    dispatch({ type: 'SWITCH_TASK', payload: taskId });
  }, [dispatch]);

  const onRestart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, [dispatch]);

  useEffect(() => {
    if (!config) {
      return;
    }
    dispatch({ type: 'INIT', payload: config });
  }, [config, dispatch]);

  return {
    currenctTask,
    tasks,
    currenctTaskIndex,
    reward,
    currency,
    isGameOver,
    isStart,
    onStart,
    onSwitchTask,
    onAnswer,
    onRestart,
  };
}
