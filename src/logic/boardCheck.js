import { WINNER_COMBOS } from "../constants/cosntantes";

// Revisamos si hay combinaciones ganadoras
export const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        // El ganador
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  }

  export const checkEndGame = (newBoard) => {
    // Revisamos que todas las casillas del tablero sean diferente a null
    return newBoard.every((Square) => Square !== null);
  }