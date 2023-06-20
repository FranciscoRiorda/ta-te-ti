export const saveGameToStorage = ({board, turn}) => {
  window.localStorage.setItem("board", JSON.stringify(board)); //Guardamos el último tablero modificado
  window.localStorage.setItem("turn", turn); // Guardamos el turno en el que ha quedado
};
 
export const removeTurnToStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
