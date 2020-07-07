import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [showForm, setShowForm] = useState(true);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoPriority, setTodoPriority] = useState("");

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    console.log("event on submit ", event);
    props.setShowForm(false);
  }

  const handleTodoTitleChange = (event) => {
    setTodoTitle(event.target.value);
  }

  const handleTodoDescriptionChange = (event) => {
    setTodoDescription(event.target.value);
  }

  const handleTodoPriorityChange = (event) => {
    setTodoPriority(event.target.value);
  }

  return (
      <div>
        <form style={{backgroundColor: "cyan"}} onSubmit={handleNewTodoSubmit}>
          <input type="text" value={todoTitle} placeholder="Title" onChange={handleTodoTitleChange}/>
          <input type="text" value={todoDescription} placeholder="Description" onChange={handleTodoDescriptionChange}/>
          <input type="text" value={todoPriority} placeholder="Priority" onChange={handleTodoPriorityChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default NewTodoForm;
