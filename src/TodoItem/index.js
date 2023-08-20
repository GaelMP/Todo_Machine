import React from 'react';
import './TodoItem.css';
import {useLocalStorage} from "../TodoContext/UseLocalStorage";

function TodoItem(props) {

  const onComplete = () => {
    props.onComplete(prevState => !prevState)
  }

  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
        ✔
      </span>
      <p 
      className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        ❌
      </span>
    </li>
  );
}

export { TodoItem };