import { useState, ChangeEvent } from "react";

type TaskSearchProps = {
    handleSearch: (value: string) => void;
};

const TaskSearchForm = ({handleSearch}: TaskSearchProps) => {
    const [taskValue, setTaskValue] = useState<string>('');
    const onSearch = () => {
        handleSearch(taskValue);
    };

    const onReset = () => {
        setTaskValue('');
        handleSearch('');
    };

    const handleSave = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
            <button onClick={onReset}>Reset</button>
        </div>  
    );
};

export default TaskSearchForm;