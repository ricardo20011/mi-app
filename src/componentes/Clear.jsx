import React from "react";
import '../estilos-css/Clear.css';

function Clear(props){
    return(
        <div className="clear"
        onClick={props.clear} >
            {props.text}
        </div>
    );
}

export default Clear;