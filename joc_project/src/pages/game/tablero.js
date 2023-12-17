import '../../styles/tablero.css';
import { listArrayDecks } from '../cards/listaDecks';
import { listCharacters } from '../personajes/characters';
import { Player } from './player';

let cardIdsWithAtk;
const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const blueEyesCardsWithAtk = data.data.filter(card => "atk" in card);
    cardIdsWithAtk = blueEyesCardsWithAtk.map(card => card.id);

    console.log(cardIdsWithAtk);
  })
  .catch(error => {
    console.error(error.message);
  });

const tablero = (namePlayer1, playerDeck1, namePlayer2, playerDeck2) => {
  const tableroDiv = document.createElement('div');
  tableroDiv.id = 'divTablero';

  function findCharacterImage(characterName) {
    const character = listCharacters.find((character) => character.name === characterName);
    return character ? character.img : '';
  }

  let selectCharacterImage1 = findCharacterImage(namePlayer1);
  let player1 = new Player(namePlayer1, playerDeck1, selectCharacterImage1, 4000, 2);
  
  let selectCharacterImage2 = findCharacterImage(namePlayer2);
  let player2 = new Player(namePlayer2, playerDeck2, selectCharacterImage2, 4000, 2);

  let turno = 1;
  let jugadorActivo = player1;
  
  tableroDiv.innerHTML = `
    <div>
      <table class="tablero1">
        <tr>
          <th class="player-info" id="playerInfo-${namePlayer1}">
            <img src="${selectCharacterImage1}" alt="${namePlayer1}">
            <div>
              <h4>${player1.getNombre()}</h4>
              <p>${player1.getVida()}</p>
              <div class="player-mazo">
                <p>${playerDeck1}</p>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <td class="celda"> 
            <div class="pedidoCarta">
              <button id="pedirCartaButton1">Pedir Carta</button>
            </div>
            <div class="batalla">
              <button id="startBattleButton">Battle</button>
            </div>
          </td>
          <td class="monster"></td>
          <td class="death"></td>
        </tr>
      </table>
    </div>
    <div class="turno">      
      <button id="turnoButton">Siguiente Turno</button>
    </div>
    <div>
      <table class="tablero2">
        <tr>
          <td class="death2"></td>
          <td class="monster2"></td>
          <td class="celda"> 
            <div class="pedidoCarta">
              <button id="pedirCartaButton2">Pedir Carta</button>
            </div>
            <div class="batalla">
              <button id="startBattleButton" ${turno === 0 && jugadorActivo === player1 ? 'disabled' : ''}>Battle</button>
            </div>
          </td>
        </tr>
        <tr>
          <th class="player-info" id="playerInfo-${namePlayer2}">
            <img src="${selectCharacterImage2}" alt="${namePlayer2}">
            <div>
              <h4>${namePlayer2}</h4>
              <p>${player2.getVida()}</p>
              <div class="player-mazo">
                <p>${playerDeck2}</p>
              </div>
            </div>
          </th>
        </tr>
      </table>
    </div>
  `;
  
  const pedirCartaButton1 = tableroDiv.querySelector("#pedirCartaButton1");
  pedirCartaButton1.addEventListener("click", () => pedirCarta(player1));

  const pedirCartaButton2 = tableroDiv.querySelector("#pedirCartaButton2");
  pedirCartaButton2.addEventListener("click", () => pedirCarta(player2));

  const turnoButton = tableroDiv.querySelector("#turnoButton");
  turnoButton.addEventListener("click", siguienteTurno);

  const monsterTd1 = tableroDiv.querySelector(".monster");
  const monsterTd2 = tableroDiv.querySelector(".monster2");

  function pedirCarta(player) {
    const randomIndex = Math.floor(Math.random() * cardIdsWithAtk.length);
    const randomCardId = cardIdsWithAtk[randomIndex];
    const cartaUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${randomCardId}`;

    fetch(cartaUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al obtener los detalles de la carta. Código de estado: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const carta = data.data[0];
        const atk = carta.atk;
        const def = carta.def;
        const imgUrl = carta.card_images[0].image_url;

        const monsterTd = player === player1 ? monsterTd1 : monsterTd2;

        monsterTd.innerHTML = `<div class="atk">ATK : ${atk}</div> <div class="def">DEF : ${def}</div>`;
        monsterTd.style.backgroundImage = `url('${imgUrl}')`;

        updateButtonStates();
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  function updateButtonStates() {
    const startBattleButton = tableroDiv.querySelector("#startBattleButton");
    startBattleButton.disabled = turno % 2 === 0 && jugadorActivo === player1;
  
    updatePlayerInfo(player1, namePlayer1);
    updatePlayerInfo(player2, namePlayer2);
  
    const player1Life = player1.getVida();
    const player2Life = player2.getVida();
  
    if (player1Life <= 0 || player2Life <= 0) {
      declareWinner();
    }
  }

  function updatePlayerInfo(player, playerName) {
    const playerInfo = tableroDiv.querySelector(`#playerInfo-${playerName}`);
    if (playerInfo) {
      playerInfo.querySelector('p').innerHTML = `Vida: ${player.getVida()}`;
    } else {
      console.error(`No se encontraron elementos playerInfo-${playerName}`);
    }
  }

  function siguienteTurno() {
    turno++;
    jugadorActivo = turno % 2 === 0 ? player2 : player1;
    updateButtonStates();
    console.log('Siguiente turno - Jugador activo: ' + jugadorActivo.getNombre());
  }

  const player1Life = player1.getVida();
  const player2Life = player2.getVida();

  if (player1Life && player2Life) {
    const startBattleButton = tableroDiv.querySelector("#startBattleButton");
    startBattleButton.addEventListener("click", realizarBatalla);
  } else {
    console.error("No se encontraron los elementos de vida de los jugadores.");
  }

  function realizarBatalla() {
    console.log('BATALLA');

    const atk1 = obtenerAtkCarta(monsterTd1);
    const atk2 = obtenerAtkCarta(monsterTd2);

    if (atk1 > atk2) {
      const diferenciaAtk = atk1 - atk2;
      console.log('Atk1 ' +atk1);
      console.log('Atk2 ' +atk2);
      console.log('DifAtk ' +diferenciaAtk);
      player2.getVida(diferenciaAtk);
      console.log("P1 " + player1.getVida());
      console.log("P2 " + player2.getVida());
    } else if (atk2 > atk1) {
      const diferenciaAtk = atk2 - atk1;
      console.log('Atk1 ' +atk1);
      console.log('Atk2 ' +atk2);
      console.log('DifAtk ' +diferenciaAtk);
      player1.modificarVida(diferenciaAtk);
      console.log("P1 " + player1.getVida());
      console.log("P2 " + player2.getVida());
    }

    reiniciarCelda(monsterTd1);
    reiniciarCelda(monsterTd2);

    updatePlayerInfo(player1, namePlayer1);
    updatePlayerInfo(player2, namePlayer2);
  }

  function obtenerAtkCarta(monsterTd) {
    const atkDiv = monsterTd.querySelector(".atk");
    return atkDiv ? parseInt(atkDiv.textContent.split(":")[1].trim()) : 0;
  }

  function reiniciarCelda(monsterTd) {
    monsterTd.innerHTML = "";
    monsterTd.style.backgroundImage = "none";
    updateButtonStates();
  }

  function declareWinner() {
    const winner = player1.vida > player2.vida ? namePlayer1 : namePlayer2;
    const message = `¡${winner} es el ganador!`;
    alert(message);
   window.location.href = '#/';
  }


  return tableroDiv;
};

export { tablero };
