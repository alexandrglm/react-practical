import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { searchTask, DispatchTaskType } from './store/task/task.actions';


const TaskSearchForm = () => {
    const [taskValue, setTaskValue] = useState<string>('');
    const dispatch: DispatchTaskType = useDispatch();

    const onSearch = () => {
        dispatch(searchTask(taskValue));
    };

    const onReset = () => {
        setTaskValue('');
        dispatch(searchTask(''));
    };

    const handleSave = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
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