import React, { useState } from 'react';
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";

const App = () => {
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const handleOpenNewTodoForm = () => {
    setShowNewTodoForm(!showNewTodoForm);
  }

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleOpenNewTodoForm}>Create new todo</button>
      {showNewTodoForm && <NewTodoForm showForm={showNewTodoForm} setShowForm={setShowNewTodoForm}/>}
      <Todo title="Title of todo 1" description="Description of todo 1" priority="2"/>
      <Todo title="Title of todo 2" description="Description of todo 2" priority="7"/>
      <Todo title="Title of todo 3" description="Description of todo 3" priority="3"/>
    </div>
  );
}

export default App;
