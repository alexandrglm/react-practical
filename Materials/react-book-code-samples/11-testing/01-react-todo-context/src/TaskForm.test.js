import { screen, render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';
import { TaskContext } from './context/task.context';

const tasks = [{id: 1, name: 'Sample1'}, {id: 2, name: 'Sample2'}, {id: 3, name: 'Sample3'}];
const context = { isTasksEmpty: jest.fn(), taskTotal: tasks.length, tasks,
    addTask: jest.fn(), removeTask: jest.fn(), updateTask: jest.fn(), clearAll: jest.fn()
};

describe('test TaskForm element', () => {
    beforeEach(() => {
        render(<TaskContext.Provider value={context}>
            <TaskForm />
            </TaskContext.Provider>);
    });

    it('shows component correctly', () => {
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('allows to write in the input', () => {
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: { value: 'New Task'}});

        expect(inputElement.value).toBe('New Task');
    });

    it('calls addTask when clicking the button', () => {
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: { value: 'New Task'}});

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(context.addTask).toBeCalled();
        expect(context.addTask).toBeCalledWith(expect.objectContaining({'name':'New Task'}));
    });

});