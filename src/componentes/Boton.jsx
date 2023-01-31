import React from "react";
import '../estilos-css/Boton.css'

function Boton(props){
  const esOperador = (valor) => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
  return(
    <div
    className={`boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
		onClick={() => {props.setValor(props.children)}}>
			{props.children}
    </div>
  );
}

export default Boton;