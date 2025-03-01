import { useState, useContext } from "react";
import { TaskContext } from './context/task.context';

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [taskValue, setTaskValue] = useState('');

    const handleChange = (e) => {
        setTaskValue(e.target.value);
    };

    const handleCreate = () => {
        addTask({id: Math.round(10000 * Math.random()), name: taskValue});
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleCreate}>Create task</button>
        </div>
    );
};

export default TaskForm;