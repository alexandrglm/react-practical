import { screen, render } from '@testing-library/react';
import TaskList from './TaskList';
import { renderWithRedux } from './testUtils';

describe('Task List testing', () => {        
    const tasks = [{id: 1, name: 'Sample1'}, {id: 2, name: 'Sample2'}, {id: 3, name: 'Sample3'}];
    beforeEach(() => {
        renderWithRedux(<TaskList tasks={tasks} />)
    });

    it('renders the title correctly', () => {
        const headingElement = screen.getByRole('heading', {text: 'Tasks'});
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the task elements', () => {
        const listElements = screen.getAllByLabelText('task');
        expect(listElements.length).toBe(tasks.length);

        listElements.forEach( (task, i) => {
            expect(task.innerHTML).toContain(tasks[i].name);
        });
    });
});



