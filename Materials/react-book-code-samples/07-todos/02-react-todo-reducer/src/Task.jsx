import { useState, useContext } from 'react';
import { createAction } from './utils/reducer/reducer.utils';
import { TASKS_ACTION_TYPES, StateContext } from './reducers/task.reducer';

const Task = ({task}) => {
    const [edit, setEdit] = useState(false);
    const dispatch = useContext(StateContext);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleDelete = () => {
        dispatch(createAction(TASKS_ACTION_TYPES.REMOVE_TASK, task.id));
    };
    
      const handleUpdate = ()=> {
        dispatch(createAction(TASKS_ACTION_TYPES.UPDATE_TASK, {...task, name: taskValue }))
        setEdit(false);
      };

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
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