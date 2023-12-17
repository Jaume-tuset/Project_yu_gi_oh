import { tablero } from './tablero.js';

const game = (namePlayer1, playerDeck1, namePlayer2, playerDeck2) => {
  let gameContainer = document.createElement("div");
  
  gameContainer.appendChild(tablero(namePlayer1, playerDeck1, namePlayer2, playerDeck2));
  return gameContainer;
};

export { game };
