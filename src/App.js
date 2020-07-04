import React from 'react';
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h3>Todos</h3>

      <Todo title="Title of todo 1" description="Description of todo 1"/>
      <Todo title="Title of todo 2" description="Description of todo 2"/>
      <Todo title="Title of todo 3" description="Description of todo 3"/>
    </div>
  );
}

export default App;
