import selectTasksWithStatus from './selectors/selectTasksWithStatus';
import { MillionaireAction, MillionaireState } from './types';

export function createInitialState(): MillionaireState {
  return {
    currentTaskIndex: 0,
    currency: null,
    tasks: null,
    isStart: false,
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

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case 'SWITCH_TASK': {
      const tasksWithStatus = selectTasksWithStatus(state);

      if (!tasksWithStatus) {
        throw new Error('Task not initialized');
      }

      const notCompletedIndex = tasksWithStatus.findIndex(
        ({ status }) => !status.isCompleted || status.isLose,
      );

      const minIndex = notCompletedIndex === -1 ? tasksWithStatus.length - 1 : notCompletedIndex;

      const newTaskIndex = Math.min(minIndex, action.payload);

      return {
        ...state,
        currentTaskIndex: newTaskIndex,
      };
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
        currentTaskIndex: 0,
        tasks: newTasks,
        isStart: true,
      };
    }
    case 'START': {
      return {
        ...state,
        isStart: true,
      };
    }
    default:
      return state;
  }
}
