import { screen, render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

const handleCreate = jest.fn();

describe('test TaskForm element', () => {
    beforeEach(() => {
        render(<TaskForm handleCreate={handleCreate}/>)
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

    it('calls handle create when clicking the button', () => {
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: { value: 'New Task'}});
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(handleCreate).toBeCalled();
        expect(handleCreate).toBeCalledWith('New Task');
        expect(inputElement.value).toBe('');
    });
});