import { createSelector } from 'reselect';
import Task from '../../types/task';
import { TaskState } from './task.reducer';
import { RootState } from '../store';

const selectTaskReducer = (state: RootState): TaskState => state.task;
export const selectSearchTerm = (state: RootState): string => state.task['searchTerm'];

export const selectTasks = createSelector(
    [selectTaskReducer],
    (task): Task[] => task.tasks
);

export const selectTaskCount = createSelector(
    [selectTaskReducer],
    (task): number => task.tasks.length
);
