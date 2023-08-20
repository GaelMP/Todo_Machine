import React from "react";
import './Alerts.css'

function Alerts(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
      }

    return(
        <div>

            {props.error && <h1>😨desesperate huvo un error😨</h1>}

            {props.loading && <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	                             <div class="wheel"></div>
	                             <div class="hamster">
		                           <div class="hamster__body">
			                        <div class="hamster__head">
	                		            <div class="hamster__ear"></div>
			                            <div class="hamster__eye"></div>
			             	            <div class="hamster__nose"></div>
			                        </div>
			                        <div class="hamster__limb hamster__limb--fr"></div>
			                        <div class="hamster__limb hamster__limb--fl"></div>
                                    <div class="hamster__limb hamster__limb--br"></div>
                                    <div class="hamster__limb hamster__limb--bl"></div>
                                    <div class="hamster__tail"></div>
		                         </div>
	                          </div>
	                          <div class="spoke"></div>
                         </div>}

            {(!props.loading && !props.searchedTodos.length) && <h1 className="create" onClick={onClickButton}>➕Crea tu primera tarea aquí➕</h1>}

            {(!props.loading && !props.searchedTodos.length) &&     <div className="arrow">  
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>      
            }

{(!props.loading && !props.searchedTodos.length) &&     <div className="arrow_2">  
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
}

        </div>
    );
};

export { Alerts };
