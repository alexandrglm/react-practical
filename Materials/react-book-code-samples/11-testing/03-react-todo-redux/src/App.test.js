import { screen, fireEvent } from '@testing-library/react';
import tasks from './initialTasks';
import App from './App';
import { renderWithRedux, renderWithReusableRedux } from './testUtils';

describe('test App element', () => {
  beforeEach(() => {
    var container = document.createElement('div');
    renderWithReusableRedux(<App />)
  });

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renders the title correctly', () => {
    const headingElement = screen.getByRole('heading', {text: 'Tasks'});
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the task elements', () => {
    const listElements = screen.getAllByLabelText('task');
    expect(listElements.length).toBe(3);

    listElements.forEach( (task, i) => {
       // expect(task.innerHTML).toContain(tasks[i].name);
    });
  });

  describe('Adds task', () => {
    it('adds a new task', () => {
      expect(screen.getAllByLabelText('task').length).toBe(3);
      const inputElements = screen.getAllByRole('textbox');
      fireEvent.change(inputElements[1], {target: { value: 'New Task'}});
  
      const createButton = screen.getByRole('button', {name: 'Create task'});
      fireEvent.click(createButton);

      expect(screen.queryByText(/New Task/)).toBeInTheDocument()
      expect(screen.getAllByLabelText('task').length).toBe(3 + 1);
    });
  })

  describe('Search task', () => {
    it('searches existing tasks', () => {
      expect(screen.getAllByLabelText('task').length).toBe(3);
      const inputElements = screen.getAllByRole('textbox');
      fireEvent.change(inputElements[0], {target: { value: tasks[0].name}});

      const searchButton = screen.getByRole('button', {name: 'Search for task'});
      fireEvent.click(searchButton);
      expect(screen.getAllByLabelText('task').length).toBe(1);
    });

    it('search does not find anything', () => {
      const inputElements = screen.getAllByRole('textbox');
      fireEvent.change(inputElements[0], {target: { value: 'nonsense'}});

      const buttonElement = screen.getByRole('button', {name: 'Search for task'});
      fireEvent.click(buttonElement);

      expect(screen.queryAllByLabelText('task').length).toBe(0);
      const buttonResetElement = screen.getByRole('button', {name: 'Clear'});
      fireEvent.click(buttonResetElement);
    });
  });

  describe('Update task', () => {
    it('updates an element', () => {
      expect(screen.queryByText(/Learn React/)).toBeInTheDocument();
      const updateButtonElements = screen.getAllByRole('button', {name: 'Edit'});
      fireEvent.click(updateButtonElements[0])

      const editInputElements = screen.getAllByRole('textbox');
      
      // There are two other textboxes before so +2
      expect(editInputElements[2].value).toBe(tasks[0].name);
  
      fireEvent.change(editInputElements[2], {target: {value: 'Updated task'}});

      const saveButtonElements = screen.getAllByRole('button', {name: 'Save'});
      fireEvent.click(saveButtonElements[0])

      expect(screen.queryByText(/Learn React/)).not.toBeInTheDocument()
      expect(screen.queryByText(/Updated task/)).toBeInTheDocument()
    });
  });

  describe('Delete task', () => {
    it('deletes an element', () => {
      expect(screen.getAllByLabelText('task').length).toBe(3);
      expect(screen.queryByText(/Learn React/)).toBeInTheDocument();
      const deleteButtonElements = screen.getAllByRole('button', {name: 'Delete'});
      fireEvent.click(deleteButtonElements[0])

      expect(screen.getAllByLabelText('task').length).toBe(3 - 1);
      expect(screen.queryByText(/Learn React/)).not.toBeInTheDocument()
    });
  });
});
