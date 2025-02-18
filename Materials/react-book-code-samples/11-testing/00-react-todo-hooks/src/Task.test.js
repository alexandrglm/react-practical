import { screen, render, fireEvent }  from '@testing-library/react';
import Task from './Task';

const task = { id: 1, name: 'Sample task' };
const handleUpdate = jest.fn();
const handleDelete = jest.fn();

describe('test Task element', () => {
    beforeEach(() => {
        render(<Task task={task} 
            handleUpdate={handleUpdate} handleDelete={handleDelete}/>);
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

        expect(handleUpdate).toBeCalled();
        expect(handleUpdate).toBeCalledWith({...task, name: 'Task name changed'});
    }); 

    it('calls handleDelete when delete button is clicked', () => {
        const deleteButtonElement = screen.getByRole('button', {name: 'Delete'});
        fireEvent.click(deleteButtonElement)

        expect(handleDelete).toBeCalled();
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(task.id);
    });
});