import { screen, render, fireEvent } from '@testing-library/react';
import TaskSearchForm from './TaskSearchForm';

const handleSearch = jest.fn();

beforeEach(() => {
    render(<TaskSearchForm handleSearch={handleSearch}/>);
});

it('shows component correctly', () => {    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const buttonSearchElement = screen.getByRole('button', {name: 'Search for task'});
    expect(buttonSearchElement).toBeInTheDocument();

    const buttonResetElement = screen.getByRole('button', {name: 'Clear'});
    expect(buttonResetElement).toBeInTheDocument();
});

it('allows to write in the input', () => {    
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: { value: 'Search Task'}});

    expect(inputElement.value).toBe('Search Task');
});

it('allows to reset the input', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: { value: 'Search Task'}});

    expect(inputElement.value).toBe('Search Task');
    const buttonResetElement = screen.getByRole('button', {name: 'Clear'});
    
    fireEvent.click(buttonResetElement);
    expect(inputElement.value).toBe('');
});

it('calls handle create when clicking the button', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: { value: 'Search this'}});

    const buttonElement = screen.getByRole('button', {name: 'Search for task'});
    fireEvent.click(buttonElement);

    expect(handleSearch).toBeCalled();
    expect(handleSearch).toBeCalledWith('Search this');
});