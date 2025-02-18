import { useState } from "react";

const ControlledInput = ({name}) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }
    return <input type1="text" value={value} onChange={onChange} name={name} />;
}

export default ControlledInput;