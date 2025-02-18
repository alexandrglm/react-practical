function Password (props) {
    return <input type="password"
        id={props.id}
        name={props.id}
        onChange={props.onChange.bind(this)}        
    />;
}

export default Password;