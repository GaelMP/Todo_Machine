import React from "react";
import './Alerts.css'

function Alerts(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
      }

    return(
        <div>

            {props.error && <h1>😨desesperate huvo un error😨</h1>}

            {props.loading && <div class="loader"></div>}

            {(!props.loading && !props.searchedTodos.length) && <h1 className="create" onClick={onClickButton}>➕Crea tu primera tarea aquí➕</h1>}

            {(!props.loading && !props.searchedTodos.length) &&     <div class="arrow">  
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>      
            }

{(!props.loading && !props.searchedTodos.length) &&     <div class="arrow_2">  
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
}

        </div>
    );
};

export { Alerts };
