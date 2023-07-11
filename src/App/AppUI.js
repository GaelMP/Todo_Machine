import React from "react";
import { TodoContext } from '../TodoContext/index';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
// import { Title } from '../Title';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import './AppUI.css';
import { Alerts } from "../Alerts";


function AppUI() {
  
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodos, 
      deleteTodos,
      openModal,
      setOpenModal,
      timestamp,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>

        {/* <Title/>   */}

        <TodoCounter/>
        
        <TodoSearch/>
      
            <TodoList>

          
              {searchedTodos.map(todo =>(

              <TodoItem
               key={todo.text}
               text={todo.text}
               timestamp={timestamp}
               completed={todo.completed}
               onComplete={() => completeTodos(todo.text)}
               onDelete={() => deleteTodos(todo.text)}
              />
              ))}
            </TodoList>

              {openModal && (
                <Modal>
                 <TodoForm/>
                </Modal>
              )}
  
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />

        <Alerts error={error} loading={loading} searchedTodos={searchedTodos} setOpenModal={setOpenModal} />
  
      </React.Fragment>
    );
}

export {AppUI}

