import React, { Component } from "react";

class InputField extends Component {
  render() {
    const Label = ({ field }) => <label for={field}>{field.toUpperCase()}</label>;
    const Input = ({ field, value, children }) => <div>{children}<input type="text" id={field} name={field} value={value} /></div>;

    return <div>
        <Input {...this.props} >
          <Label field={this.props.name} />
        </Input>
      </div>;
  }
}

export default InputField;