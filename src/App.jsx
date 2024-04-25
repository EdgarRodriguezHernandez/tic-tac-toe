
import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}


//Tablero
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
 
  const handleClick = () => {
  updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
    {children}
    </div>
  )
}

const Winner_Combos = [
/*We could simplify the code more, creating abc position conditionals*/
//horizontal
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
//vertical
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
//cross
[0, 4, 8],
[2, 4, 6]
]



function App() {

    //creación de tablero posición inicial y actual
    const [board, setBoard] = useState(Array(9).fill(null));


    //estado de comienzo de turno.
    const [turn, setTurn] = useState(TURNS.X)

    const[winner, setWinner] = useState(null)

    const checkWinner = (boardCheck) => {
      for (const combo of Winner_Combos){
        const [a, b, c] = combo
        if(
          boardCheck[a] && boardCheck[a] === boardCheck[b] && 
          boardCheck[a] === boardCheck[c]
        ){
          return boardCheck[a]
        }
        return (null)
      }
    }

    const updateBoard = (index) => {
      if(board[index] || winner) return

      //Actualiza el tablero
      const newBoard = [...board]
      newBoard[index]= turn 
      setBoard(newBoard)

      //cambiar turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      const newWinner = checkWinner (newBoard)
      if(newWinner){
        setWinner(newWinner)
      }
    }

  return(
    <main className = 'board'>
      <h1>Tic Tac Toe</h1>
      
      <section className = "game">
        {
          board.map((_, index) => {
            return (
              <Square
              key = {index} 
              index ={index}
              updateBoard={updateBoard}
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
