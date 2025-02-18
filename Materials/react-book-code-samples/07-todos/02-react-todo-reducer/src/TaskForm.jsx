import { useState, useContext } from "react";
import { createAction } from './utils/reducer/reducer.utils';
import { TASKS_ACTION_TYPES, StateContext } from './reducers/task.reducer';

const TaskForm = () => {
    const dispatch = useContext(StateContext);
    const [taskValue, setTaskValue] = useState('');

    const handleCreate = () => {
        dispatch(createAction(TASKS_ACTION_TYPES.ADD_TASK, {id: Math.round(10000 * Math.random()), name: taskValue}))
    };

    const handleChange = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleCreate}>Create task</button>
        </div>
    );
};

export default TaskForm;