import { useState } from 'react';
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx';
import { TURNS, Winner_Combos } from './constants.js';
import { WinnerMesage } from './components/WinnerMesage.jsx';


function App() {

    //creation of initial and current position board
    const [board, setBoard] = useState(Array(9).fill(null));


    //shift start status.
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
      }
      return (null)
    }

    const resetGame = () =>{
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }

    const checkEndGame = (newBoard) =>{
      return newBoard.every((square) => square !== null)
    }

    const updateBoard = (index) => {
      if(board[index] || winner) return

      //Update the board
      const newBoard = [...board]
      newBoard[index]= turn 
      setBoard(newBoard)//asynchronous

      //CHANGE TURN
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      const newWinner = checkWinner (newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      }else if(checkEndGame(newBoard)){
        setWinner(false)
      }
    }

  return(
    <main className = 'board'>
      <h1 className='title'>Tic Tac Toe</h1>
      
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

      <button onClick={resetGame}>New game</button>

      <WinnerMesage winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
