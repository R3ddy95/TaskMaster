import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoList from './components/ToDoList';
import { faMoon, faSun, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (taskText.trim() === '') return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Aggiungi o rimuovi la classe al body
  };

  return (
    <div className={`App container ${darkMode ? 'dark-mode' : ''}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <><FontAwesomeIcon icon={faSun} /> Light Mode</>  : <><FontAwesomeIcon icon={faMoon} /> Dark Mode</> }
      </button>
      <h1 className="mt-4">TaskMaster</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={addTask}>Add</button>
        </div>
      </div>
      <TodoList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} />

      <div className="footer">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col item social">

          <a style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/BlackJocker/" target="_blank"><i
              className="icon ion-social-facebook"></i></a>
          <a style={{ backgroundColor: '#55acee' }} href="https://twitter.com/EdoardoVitaglia" target="_blank"><i
              className="icon ion-social-twitter"></i></a>
          <a style={{ backgroundColor: '#333333' }} href="https://github.com/R3ddy95" target="_blank"><i
              className="icon ion-social-github"></i></a>
          <a style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/edoardo-vitagliano-299737110"
            target="_blank"><i className="icon ion-social-linkedin"></i></a>
          <a style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/edo.vitagliano/" target="_blank"><i
              className="icon ion-social-instagram"></i></a>

        </div>
      </div>
      <p className="copyright">Created by <b>Edoardo Vitagliano</b> © 2023</p>
    </div>
  </footer>
</div>

    </div>
  );
}

export default App;