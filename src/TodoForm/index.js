import React from "react";
import { TodoContext } from "../TodoContext";
import './Form.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodos,
        setOpenModal
    } = React.useContext(TodoContext)

    const maxLength = 46;

    const onChange = (event) => {
        const newText = event.target.value;

        if (newText.length <= maxLength) {
            setNewTodoValue(newText)
        }
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Crea una nueva tarea aquí!</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={`Escribe aquí el nombre de tu Tarea`}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };