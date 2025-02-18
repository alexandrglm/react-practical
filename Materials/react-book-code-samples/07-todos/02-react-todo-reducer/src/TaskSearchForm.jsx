import { useState, useContext } from "react";
import { createAction } from './utils/reducer/reducer.utils';
import { TASKS_ACTION_TYPES, StateContext } from './reducers/task.reducer';

const TaskSearchForm = () => {
    const dispatch = useContext(StateContext);
    const [taskValue, setTaskValue] = useState('');
    const onSearch = () => {
        dispatch(createAction(TASKS_ACTION_TYPES.SEARCH_TASK, taskValue))
    };

    const onReset = () => {
        setTaskValue('');
        dispatch(createAction(TASKS_ACTION_TYPES.SEARCH_TASK, ''))
    };

    const handleSave = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
            <button onClick={onReset}>Clear</button>
        </div>
    );
};

export default TaskSearchForm;