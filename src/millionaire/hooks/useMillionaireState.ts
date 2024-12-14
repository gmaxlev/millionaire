'use client';

import useFetchTasks from '@/millionaire/hooks/useFetchTasks';
import useMillionaireGameReducer from '@/millionaire/hooks/useMillionaireGameReducer';
import { useEffect, useMemo } from 'react';
import { MillionaireOption } from '@/millionaire/types';
import selectCurrentTask from '@/millionaire/store/selectors/selectCurrentTask';
import selectOptions from '@/millionaire/store/selectors/selectOptions';
import selectTasks from '@/millionaire/store/selectors/selectTasks';
import selectCurrentTaskIndex from '@/millionaire/store/selectors/selectCurrentTaskIndex';
import selectReward from '@/millionaire/store/selectors/selectReward';
import selectCurrency from '@/millionaire/store/selectors/selectCurrency';
import selectStatus from '@/millionaire/store/selectors/selectStatus';

export default function useMillionaireState() {
  const config = useFetchTasks();

  const [state, dispatch] = useMillionaireGameReducer();

  const currenctTask = useMemo(() => selectCurrentTask(state), [state]);

  const options = useMemo(() => selectOptions(state), [state]);

  const tasks = useMemo(() => selectTasks(state), [state]);

  const currenctTaskIndex = useMemo(() => selectCurrentTaskIndex(state), [state]);

  const reward = useMemo(() => selectReward(state), [state]);

  const currency = useMemo(() => selectCurrency(state), [state]);

  const {
    isCompleted, isLose, isLastTask,
  } = useMemo(() => selectStatus(state), [state]);

  const isDisabled = isCompleted;

  const onAnswer = (optionId: MillionaireOption['id']) => {
    dispatch({
      type: 'ANSWER',
      payload: {
        optionId,
      },
    });
  };

  useEffect(() => {
    if (!config) {
      return;
    }
    dispatch({ type: 'INIT', payload: config });
  }, [config, dispatch]);

  return {
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
  };
}
