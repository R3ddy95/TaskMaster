import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoItem = ({ task, onToggle, onDelete, darkMode }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-danger'}`} onClick={() => onDelete(task.id)}>
        {darkMode ? <FontAwesomeIcon icon={faTrashCan} /> : <FontAwesomeIcon icon={faTrashCan} />}
      </button>
    </li>
  );
};

export default TodoItem;
