import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggle, onDelete, darkMode }) => {
  return (
    <ul className={`list-group mt-3 ${darkMode ? 'dark-mode' : ''}`}>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} darkMode={darkMode} />
      ))}
    </ul>
  );
};

export default TodoList;