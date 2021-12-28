import React from 'react';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      {/* A component to add todos here */}
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
