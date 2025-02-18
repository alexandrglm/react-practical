import { screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';
import { renderWithRedux } from './testUtils';

let component, dispatchSpy;

describe('test TaskForm element', () => {
    beforeEach(() => {
        component = renderWithRedux(<TaskForm />);
        dispatchSpy = jest.spyOn(component.store, 'dispatch')
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

       expect(dispatchSpy).toBeCalled();
       expect(dispatchSpy).toBeCalledWith(expect.objectContaining({"type": "ADD_TASK"}));
    });

});