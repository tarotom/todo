import React from "react";

const Todo = (props) => {
  return (
    <div style={{backgroundColor: "red"}}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Todo;
