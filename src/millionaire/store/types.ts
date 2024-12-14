import {
  MillionaireConfig, MillionaireOption, MillionaireTask,
} from '../types';

type Action<Type, Payload> = undefined extends Payload ? { type: Type } : {
  type: Type;
  payload: Payload;
};

export type MillionaireTaskState = Omit<MillionaireTask, 'options'> &
{ options: Array<MillionaireOption & { isSelected: boolean }> };

type MillionaireTasksState = Array<MillionaireTaskState>;

export type MillionaireState = {
  currentTaskIndex: number;
  currency: string | null;
  tasks: MillionaireTasksState | null;
  isStart: boolean;
};

export type TaskStatus = {
  isCompleted: boolean;
  isLose: boolean;
  isWin: boolean;
  isLastTask: boolean;
  isFirstTask: boolean;
};

export type Initction = Action<'INIT', MillionaireConfig>;

export type AnswerAction = Action<'ANSWER', {
  optionId: MillionaireOption['id'];
}>;

export type RestartAction = Action<'RESTART', undefined>;

export type SwitchTaskAction = Action<'SWITCH_TASK', number>;

export type StartAction = Action<'START', undefined>;

export type MillionaireAction =
Initction |
AnswerAction |
RestartAction |
SwitchTaskAction |
StartAction;
