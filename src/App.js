import React from 'react';
import Todo from "./components/Todo";

const App = () => {
  const handleOpenNewTodoForm = () => {
    console.log("Opening form for creating a new Todo!");
  }

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleOpenNewTodoForm}>Create new todo</button>

      <Todo title="Title of todo 1" description="Description of todo 1"/>
      <Todo title="Title of todo 2" description="Description of todo 2"/>
      <Todo title="Title of todo 3" description="Description of todo 3"/>
    </div>
  );
}

export default App;
