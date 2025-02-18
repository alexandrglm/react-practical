import { screen, render, fireEvent }  from '@testing-library/react';
import Task from './Task';
import { TaskContext } from './context/task.context';

const task = { id: 1, name: 'Sample task' };
const tasks = [{id: 1, name: 'Sample1'}, {id: 2, name: 'Sample2'}, {id: 3, name: 'Sample3'}];
const context = { isTasksEmpty: jest.fn(), taskTotal: tasks.length, tasks,
    addTask: jest.fn(), removeTask: jest.fn(), updateTask: jest.fn(), clearAll: jest.fn()
};

beforeEach(() => {
    render(<TaskContext.Provider value={context}><Task 
        task={task} 
    /></TaskContext.Provider>);
});

it('renders Task elements correctly', () => {
    const idElement = screen.getByText(/1/);
    expect(idElement).toBeInTheDocument();

    const nameElement = screen.getByText(/Sample task/);
    expect(nameElement).toBeInTheDocument();

    const editButtonElement = screen.getByRole('button', {name: 'Edit'});
    expect(editButtonElement).toBeInTheDocument();

    const deleteButtonElement = screen.getByRole('button', {name: 'Delete'});
    expect(deleteButtonElement).toBeInTheDocument();
});

it('allows to update value when update is clicked', () => {
    const editButtonElement = screen.getByRole('button', {name: 'Edit'});
    fireEvent.click(editButtonElement);
    const editInputElement = screen.getByRole('textbox');

    expect(editInputElement.value).toBe(task.name);

    fireEvent.change(editInputElement, {target: {value: 'Task name changed'}});
    expect(editInputElement.value).toBe('Task name changed');
    
    const saveButtonElement = screen.getByRole('button', {name: 'Save'});
    fireEvent.click(saveButtonElement);

    expect(context.updateTask).toBeCalled();
    expect(context.updateTask).toBeCalledWith({...task, name: 'Task name changed'});
}); 

it('calls handleDelete when delete button is clicked', () => {
    const deleteButtonElement = screen.getByRole('button', {name: 'Delete'});
    fireEvent.click(deleteButtonElement)

    expect(context.removeTask).toBeCalled();
    expect(context.removeTask).toHaveBeenCalled();
    expect(context.removeTask).toHaveBeenCalledWith(task.id);
});