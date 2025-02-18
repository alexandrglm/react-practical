import { useMemo, useReducer } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import { initialTaskState, taskReducer, StateProvider } from './reducers/task.reducer';

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const filteredTaskList = useMemo( () => {
    return state.tasks.filter((task) => {
      return task.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    })
  }, [state.searchTerm, state.tasks]);

  return (
    <div className="App">
      <StateProvider initialTaskState={initialTaskState} reducer={dispatch}>
        <TaskSearchForm />
        <TaskForm />
        <TaskList tasks={filteredTaskList} />
      </StateProvider>
    </div>
  );
}

export default App;
