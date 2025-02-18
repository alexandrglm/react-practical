import { useState, useContext } from "react";
import { TaskContext } from './context/task.context';

const Task = ({task}) => {
    const { updateTask, removeTask } = useContext(TaskContext);
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
    };

    const handleUpdate = () => {
        updateTask({...task, name: taskValue });
        setEdit(false);
    }

    const handleDelete = () => {
        removeTask(task.id);
    };

    return (
        edit ?
            <div aria-label="task">
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={handleUpdate}>Save</button>
            </div>
        :   <div aria-label="task">
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
    )
};

export default Task;