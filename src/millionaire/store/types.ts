import {
  MillionaireConfig, MillionaireOption, MillionaireTask,
} from '../types';

type Action<Type, Payload> = undefined extends Payload ? { type: Type } : {
  type: Type;
  payload: Payload;
};

type MillionaireTasksState = Array<
Omit<MillionaireTask, 'options'> &
{ options: Array<MillionaireOption & { isSelected: boolean }> }
>;

export type MillionaireState = {
  currentTaskIndex: number;
  currency: string | null;
  tasks: MillionaireTasksState | null;
};

export type Initction = Action<'INIT', MillionaireConfig>;

export type AnswerAction = Action<'ANSWER', {
  optionId: MillionaireOption['id'];
}>;

export type RestartAction = Action<'RESTART', undefined>;

export type MillionaireAction = Initction | AnswerAction | RestartAction;
