import React, { Component } from "react";

class Form extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <form>
            <div>{this.props.input}</div>
            <div>{this.props.button}</div>
        </form>;
    }
}

export default Form;