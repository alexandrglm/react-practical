import { useState } from "react"; 
import { useDispatch } from 'react-redux';
import { addTask } from './store/task/task.actions';

const TaskForm = () => {
    const [taskValue, setTaskValue] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTask({id: Math.round(10000 * Math.random()), name: taskValue}))
    };

    const handleChange = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleSave}>Create task</button>
        </div>
    );
};

export default TaskForm;