import { useState } from "react";
import confetti from 'canvas-confetti';

import { Square } from "./components/Square";
import { TURNS } from "./constants/cosntantes";
import { checkEndGame, checkWinner } from "./logic/boardCheck";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";

function App() {

  // Tablero
const [board, setBoard] = useState(Array(9).fill(null));
const [turn, setTurn] = useState(TURNS.X);
const [winner, setWinner] = useState(null); // Toma el ganador. Null no hay ganador. False hay empate

// Resetear juego
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

const updateBoard = (index) => {
  // No actualizar cuadro cuando tiene un valor 
  if(board[index] || winner) return;

  // Actualizar tablero
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);
  
  // Cambiar el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn)

  // Revisar si hay un ganador
  const newWinner = checkWinner(newBoard)
  if(newWinner){
    confetti();
    setWinner(newWinner); // Actualización del estado es asíncrono, se genera un ganador
  } else if (checkEndGame(newBoard)) {
    setWinner(false); //False es empate
  }
};

  return (
    <>
    <main className="board">
      <h1>Ta-Te-Ti</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className="game">
        <Board updateBoard={updateBoard} board={board}></Board>
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
        <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
        </main>
    </>
  );
}

export default App;
