import { createContext, useState } from 'react';
import initialTasks from '../initialTasks';

const addTaskToTasks = (tasks, taskToAdd) => {
  return [...tasks, taskToAdd];  
};

const removeTaskFromTasks = (tasks, idToRemove) => {
    return tasks.filter( task => task.id !== idToRemove)
};

const updateTaskFromTasks = (tasks, taskToUpdate) => {
    const filteredTasks = tasks.filter( task => task.id !== taskToUpdate.id);

    return [...filteredTasks, taskToUpdate];
}

const clearAllTasks = (tasks) => [];

export const TaskContext = createContext({
    isTasksEmpty: true,
    taskTotal: 0,
    tasks: [],
    addTask: () => {},
    removeTask: () => {},
    updateTask: () => {},
    clearAll: () => {},
})

export const TaskProvider = ({children}) => {
    const [isTasksEmpty, setTasksEmpty] = useState(false);
    const [taskTotal, setTaskTotal] = useState(0);
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (task) => { 
        setTasks(addTaskToTasks(tasks, task));
        updateTaskCount();
    }

    const removeTask = (id) => { 
        setTasks(removeTaskFromTasks(tasks, id));
        updateTaskCount();
    }

    const updateTask = (task) => {
        setTasks(updateTaskFromTasks(tasks, task))
    }

    const clearAll = () => {
        setTasks(clearAllTasks());
        updateTaskCount();
    }

    const updateTaskCount = () => {
        setTaskTotal(tasks.length);
        setTasksEmpty(tasks.length === 0)
    }

    const value = { isTasksEmpty, taskTotal, tasks,
        addTask, removeTask, updateTask, clearAll
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}