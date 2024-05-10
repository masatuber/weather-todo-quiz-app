import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
const handleTodoClick = () => {
    toggleTodo(todo.id);
};

  return (
    <>
    <div className="todo">
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} />
        </label>
        {todo.name}
    </div>
   </> 
  );
};

export default Todo;