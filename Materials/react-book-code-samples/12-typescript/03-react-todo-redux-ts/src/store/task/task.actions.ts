
import { createAction } from '../../utils/reducer/reducer.utils';
import Task from '../../types/task';
import { Action } from '../../types/action';
import { TASK_ACTION_TYPES } from './task.types'; 

export type DispatchTaskType = (args: Action) => Action

export const addTask = (task: Task): Action => {
    return createAction(TASK_ACTION_TYPES.ADD_TASK, task);
};

export const removeTask = (id: number): Action => {
    return createAction(TASK_ACTION_TYPES.REMOVE_TASK, id);
};

export const updateTask = (task: Task): Action  => {
    return createAction(TASK_ACTION_TYPES.UPDATE_TASK, task);
};

export const searchTask = (name: string): Action  => {
    return createAction(TASK_ACTION_TYPES.SEARCH_TASK, name);
};

