import "../../styles/interfaz.css"; 
import { listArrayDecks } from "../cards/listaDecks";
import { listCharacters } from "../personajes/characters.js";
import { interfaz } from "./interfaze.js";

const mostrarInterfaz2 = () => {

  let divInterfaze2 = document.createElement("div");
  divInterfaze2.classList.add("divInterfaz2");

  let interfaz2 = document.createElement("div");
  interfaz2.id="interfaz2";

  let dataInitGame=document.createElement("form");
  dataInitGame.action="${send}";
  dataInitGame.method="POST";
  
  let registre=document.createElement("h2");
  registre.innerHTML="Registro";
 
  //jugador 1
  let player1AvatarLabel = document.createElement("label");
  player1AvatarLabel.id="player1AvatarLabel";
  player1AvatarLabel.innerHTML="Selecciona Personaje Player 1: ";
  let player1AvatarSelect = document.createElement("select");

  for (let i = 0; i < listCharacters.length; i++) {
    let deck = listCharacters[i];
    let option = document.createElement("option");
    option.value = deck.name;
    option.text = deck.name;
    player1AvatarSelect.appendChild(option);
  }
  
  let player1DeckLabel = document.createElement("label");
  player1DeckLabel.id="player1DeckLabel";
  player1DeckLabel.innerHTML="Selecciona deck Player 1: ";
  let player1DeckSelect = document.createElement("select");

  for (let i = 0; i < listArrayDecks.length; i++) {
    let deck = listArrayDecks[i];
    let option = document.createElement("option");
    option.value = deck.name;
    option.text = deck.name;
    player1DeckSelect.appendChild(option);
  }

  
  //jugador 2
  let player2AvatarLabel = document.createElement("label");
  player2AvatarLabel.id="player2AvatarLabel";
  player2AvatarLabel.innerHTML="Selecciona Personaje Player 1: ";
  let player2AvatarSelect = document.createElement("select");
 
  for (let i = 0; i < listCharacters.length; i++) {
    let deck = listCharacters[i];
    let option = document.createElement("option");
    option.value = deck.name;
    option.text = deck.name;
    player2AvatarSelect.appendChild(option);
  }

  let player2DeckLabel = document.createElement("label");
  player2DeckLabel.id="player2DeckLabel";
  player2DeckLabel.innerHTML="Selecciona deck Player 2: ";
  let player2DeckSelect = document.createElement("select");

  for (let i = 0; i < listArrayDecks.length; i++) {
    let deck = listArrayDecks[i];
    let option = document.createElement("option");
    option.value = deck.name;
    option.text = deck.name;
    player2DeckSelect.appendChild(option);
  }

  let send = document.createElement("button");
  send.id="send";
  send.innerHTML="Enviar";
  send.addEventListener("click", async () => {
    const namePlayer1 = player1AvatarSelect.value;
    const namePlayer2 = player2AvatarSelect.value;
    const playerDeck1 = player1DeckSelect.value;
    const playerDeck2 = player2DeckSelect.value;
  
    const apiUrl = 'https://gmlzjxsypdgmyloaxoze.supabase.co/rest/v1/players'; 
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbHpqeHN5cGRnbXlsb2F4b3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2NjcwNzIsImV4cCI6MjAxMzI0MzA3Mn0.CaZFMPDPIlHDMIl5lQaE5xaGWgPi5bvtpXdZvkYFLuk',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbHpqeHN5cGRnbXlsb2F4b3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2NjcwNzIsImV4cCI6MjAxMzI0MzA3Mn0.CaZFMPDPIlHDMIl5lQaE5xaGWgPi5bvtpXdZvkYFLuk',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify([
        { nombre: namePlayer1, deck: playerDeck1 },
        { nombre: namePlayer2, deck: playerDeck2 }
      ])
    });
  
    if (response.ok) {
      window.location.href = "#/game";
    } else {
      console.error('Error al guardar los datos en Supabase:', response.status, await response.text());
    }
  });

  let back=document.createElement("button");
  back.id="back";
  back.innerHTML="Atrás";
  back.addEventListener("click",()=>{
    interfaz();
    window.location.href="#/interfaz";
  });

  dataInitGame.appendChild(registre);
  dataInitGame.appendChild(player1AvatarLabel);
  dataInitGame.appendChild(player1AvatarSelect);
  dataInitGame.appendChild(player1DeckLabel);
  dataInitGame.appendChild(player1DeckSelect);
  dataInitGame.appendChild(player2AvatarLabel);
  dataInitGame.appendChild(player2AvatarSelect);
  dataInitGame.appendChild(player2DeckLabel);
  dataInitGame.appendChild(player2DeckSelect);
  interfaz2.appendChild(dataInitGame);
  interfaz2.appendChild(send);
  interfaz2.appendChild(back);
  divInterfaze2.appendChild(interfaz2);


  document.getElementById("interfaz").appendChild(divInterfaze2);
};

export { mostrarInterfaz2 };
