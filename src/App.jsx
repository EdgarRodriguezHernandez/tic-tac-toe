
import { useState } from 'react';
import './App.css'

const TURNS = {//Creación de turnos
  X: 'X',//elemento si es X o O
  O: 'O'
}


//tablero. Children la propiedad de dentro(X, O), Update para actualizar y el index
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'selected' : ''}`
 
  const handleClick = () => {
  updateBoard(index)
  }

  //Renderizamos el square
  return (
    <div onClick={handleClick} className={className}>
    {children}
    </div>
  )
}



function App() {

    //creación de tablero posición inicial y actual
    const [board, setBoard] = useState/*Estado inicial*/(Array(9).fill(null));
    //En css con grid le distribuimos las 9 posiciones con grid en index.css

    //estado de comienzo de turno. Array de 2pos , estado y como actualizar
    const [turn, setTurn] = useState(TURNS.X)

    const updateBoard = (index) => {
      //Si en el board hay alguna cosa, que no se acrtualize
      if(board[index]) return


      //Actualiza el tablero
      const newBoard = [...board]//copia el array aquí
      newBoard[index]= turn //Turno X o O
      setBoard(newBoard)

      //cambiar turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)//Actualizamos el turno con setTurn
    }

  return(
    <main className = 'board'>
      <h1>Tic Tac Toe</h1>
      
      <section className = "game">
        {
          board.map((cell, index) => {//lista de elemetnos en array
            return (
              <Square
              key = {index} /*El indice en este caso no varia*/
              index ={index}
              updateBoard={updateBoard}//Funcion para actualizar estados....
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected ={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected ={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
