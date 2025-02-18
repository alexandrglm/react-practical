import { screen, fireEvent }  from '@testing-library/react';
import Task from './Task';
import { renderWithReusableRedux } from './testUtils';

const task = { id: 1, name: 'Sample task' };
let component, dispatchSpy;

beforeEach(() => {
    component = renderWithReusableRedux(<Task task={task} />);
    dispatchSpy = jest.spyOn(component.store, 'dispatch')
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

    expect(dispatchSpy).toBeCalled();
    expect(dispatchSpy).toBeCalledWith({payload: {...task, name: 'Task name changed'}, "type": "UPDATE_TASK" });
}); 

it('calls handleDelete when delete button is clicked', () => {
    const deleteButtonElement = screen.getByRole('button', {name: 'Delete'});
    fireEvent.click(deleteButtonElement)

});