import { useState } from "react";
import { useDispatch } from 'react-redux'; 
import { updateTask, removeTask } from './store/task/task.actions';

const Task = ({task}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
    };

    const handleUpdate = () => {
        dispatch(updateTask({...task, name: taskValue }));
        setEdit(false);
    }

    const handleDelete = () => {
        dispatch(removeTask((task.id)));
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={handleUpdate}>Save</button>
            </div>
        :   <div>
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
    )
};

export default Task;