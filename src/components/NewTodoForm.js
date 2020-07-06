import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [showForm, setShowForm] = useState(true);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    console.log("event on submit ", event);
    props.setShowForm(false);
  }

  return (
      <div>
        <form style={{backgroundColor: "cyan"}} onSubmit={handleNewTodoSubmit}>
          <input type="text" value="" placeholder="Title"/>
          <input type="text" value="" placeholder="Description"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default NewTodoForm;
