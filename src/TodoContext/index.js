import React from "react";
import {useLocalStorage} from "../TodoContext/UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const { 
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);

const [searchValue, setSearchValue] = React.useState('')

const [openModal, setOpenModal] = React.useState(false);

const completedTodos = todos.filter(todos => !!todos.completed).length;
const totalTodos = todos.length

let searchedTodos = [];

if (
  !searchValue .length >= 1) {
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const now = new Date();
  const timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0, 0).getTime();

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      timestamp: timestamp,
    })
   saveTodos(newTodos)

    };

    // const playSound = () => {
    //   const audio = new Audio('./');
    //   audio.play();
    // }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    saveTodos(newTodos)

    };

    const deleteTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1)
     saveTodos(newTodos)

      // const audio = new Audio('./sonidos/check-mark-sound-effect.mp3');
      // audio.play()
      };



    return(
        <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodos,
          deleteTodos,
          openModal,
          setOpenModal,
          addTodos
        }}>
        {props.children}
    </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };