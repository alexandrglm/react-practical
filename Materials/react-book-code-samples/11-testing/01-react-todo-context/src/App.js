import { useState, useMemo, useContext } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import { TaskContext } from './context/task.context';

function App() {
  const { tasks } = useContext(TaskContext);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (name) => { setSearchTerm(name); };

  const filteredTaskList = useMemo( () => {
    return tasks.filter((task) => {
      return task.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }, [searchTerm, tasks]);

  return (
    <div className="App">
      <TaskSearchForm handleSearch={handleSearch}/>
      <TaskForm />
      <TaskList tasks={filteredTaskList} />
    </div>
  );
}

export default App;
