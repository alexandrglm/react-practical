const InputField = (props) => {
    const Label = ({ field }) => <label htmlFor={field}>{field.toUpperCase()}</label>;
    const Input = ({ field, value, children }) => <div>{children}<input type="text" id={field} name={field} defaultValue={value} /></div>;

    return <div>
        <Input {...props} >
          <Label field={props.name} />
        </Input>
      </div>;
  }

export default InputField;