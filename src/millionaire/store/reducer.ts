import selectStatus from './selectors/selectStatus';
import { MillionaireAction, MillionaireState } from './types';

export function createInitialState(): MillionaireState {
  return {
    currentTaskIndex: 0,
    currency: null,
    tasks: null,
  };
}

export function millionaireReducer(
  state: MillionaireState,
  action: MillionaireAction,
): MillionaireState {
  switch (action.type) {
    case 'INIT': {
      return {
        ...state,
        currency: action.payload.currency,
        tasks: action.payload.tasks.map((task) => ({
          ...task,
          options: task.options.map((option) => ({
            ...option,
            isSelected: false,
          })),
        })),
      };
    }
    case 'ANSWER': {
      const { tasks } = state;

      if (!tasks) {
        throw new Error('Task not initialized');
      }

      const newTasks = [...tasks];

      const newTask = { ...newTasks[state.currentTaskIndex] };

      const newOptions = newTask.options.map((option) => {
        if (option.id !== action.payload.optionId) {
          return option;
        }

        return {
          ...option,
          isSelected: true,
        };
      });

      newTask.options = newOptions;

      newTasks[state.currentTaskIndex] = newTask;

      let newState = {
        ...state,
        tasks: newTasks,
      };

      const { isWin } = selectStatus(newState);

      if (isWin) {
        const nextTaskIndex = Math.min(state.currentTaskIndex + 1, tasks.length - 1);

        newState = {
          ...newState,
          currentTaskIndex: nextTaskIndex,
        };
      }

      return newState;
    }
    case 'RESTART': {
      const { tasks } = state;

      if (!tasks) {
        throw new Error('Task not initialized');
      }

      const newTasks = tasks.map((task) => ({
        ...task,
        options: task.options.map((option) => ({
          ...option,
          isSelected: false,
        })),
      }));

      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
}
