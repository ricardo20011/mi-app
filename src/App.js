
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  
  const manejarClick = val => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <h2 className='App__titulo'>Calculadora Estandar</h2>
      <div className='contenedor-calculadora'>
        <Pantalla 
        input = {input} />
        <div className='fila'>
          <Boton setValor = {manejarClick}>7</Boton>
          <Boton setValor = {manejarClick}>8</Boton>
          <Boton setValor = {manejarClick}>9</Boton>
          <Boton setValor = {manejarClick}>+</Boton>
        </div>
        <div className='fila'>
          <Boton setValor = {manejarClick}>4</Boton>
          <Boton setValor = {manejarClick}>5</Boton>
          <Boton setValor = {manejarClick}>6</Boton>
          <Boton setValor = {manejarClick}>-</Boton>
        </div>
        <div className='fila'>
          <Boton setValor = {manejarClick}>1</Boton>
          <Boton setValor = {manejarClick}>2</Boton>
          <Boton setValor = {manejarClick}>3</Boton>
          <Boton setValor = {manejarClick}>*</Boton>
        </div>
        <div className='fila'>
          <Boton setValor= {calcularResultado}>=</Boton>
          <Boton setValor = {manejarClick}>0</Boton>
          <Boton setValor = {manejarClick}>.</Boton>
          <Boton setValor = {manejarClick}>/</Boton>
        </div>
        <div className='fila'>
          <Clear 
            text='Clear' 
            clear = {()=> setInput('')} />
        </div>
      </div>
    </div>
  );
}

export default App;
