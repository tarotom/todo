import React, { useState } from "react";

const Todo = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditButtonClick = () => {
    setEditing(true);
  }

  const handleCancelButtonClick = () => {
    setEditing(false);
  }

  const renderEditForm = () => {
    return (
      <div style={{backgroundColor: "red"}}>
        <input type="text" value={props.title}/>
        <button>Save</button>
        <button onClick={handleCancelButtonClick}>Cancel</button>
        <input type="text" value={props.description}/>
        <input type="text" value={props.priority}/>
      </div>
    )
  }

  const renderTodo = () => {
    return (
      <div style={{backgroundColor: "red"}}>
        <h2>{props.title}</h2>
        <button onClick={handleEditButtonClick}>Edit</button>
        <p>{props.description}</p>
        <p>{props.priority}</p>
      </div>
    )
  }

  return (
    <>
      { editing ? renderEditForm() : renderTodo() }
    </>
  )
}

export default Todo;
