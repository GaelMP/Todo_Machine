import React from 'react';
import './TodoCounter.css';
import { totalTodos } from '../App/App';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      {completedTodos === totalTodos ? "🎉Felicidades, has completado TODAS tus tareas🎉" : `Has completado ${completedTodos} de ${totalTodos} TODOs`}
    </h1>
  );
}

export { TodoCounter };