import React from "react";
import "./Dialog.css";

function Dialog ({className = "",...dialog}) {
    const classes = ["default", className].join(" ");

    return <div className={classes}>
            <h3>{dialog.title}</h3>
            <p>{dialog.content}</p>
    </div>;
}

export default Dialog;