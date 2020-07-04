import React from "react";

const Todo = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}

export default Todo;
