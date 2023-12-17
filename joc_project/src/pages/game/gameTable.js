import { listArrayDecks } from "../cards/listaDecks"; 

export { gameTable };

const gameTable = () => {

    let table1=document.querySelector(".tablero1");
    let table2=document.querySelector(".tablero2");
    let player1=document.querySelector("player1");
    let player2=document.querySelector("player2");
    let camp = document.querySelector(".camp");
    let monster = document.querySelector(".monster");
    let magic = document.querySelector(".magic");
    let death = document.querySelector(".death");
    let fusion = document.querySelector(".fusion");
    let session = document.querySelector(".session");
    let turnos = 0;
    let fases = [" Main Fase ", " Draw Fase ", " Battle Fase ", " Resolving Fase "];
    let mazeHandPlayer1 = [];
    let mazeHandPlayer2 = [];

    //function limitTemps(){
    //   setTimeout(()=>{
    //        changeSession();
    //        limitTemps();
    //    },30000);
    //}

    function changeSession(){
        turnos++;
        const faseActual = fases[turnos%fases.length];
        session.textContent="${faseActual}";
    }

    function sessions(){
        const faseActual = fases[turnos%fases.length];
        let gameFinish=false;
        
        while (!gameFinished) {
            const faseActual = fases[turnos % fases.length];
    
            switch (faseActual) {
                case "Main Fase":
                    player1.readDecks();
                    player2.readDecks();
                    break;
                case "Draw Fase":
                    
                    break;
                case "Battle Fase":
                    break;
                case "Resolving Fase":
                    break;
                default:
                    console.log('Error');
                    break;
            }
    
            // gameFinished = checkIfGameFinished();
        }
    }

    

    function addCardMazeHand(deck,player) {
        const randomIndex = Math.floor(Math.random() * deck.length); 
        const randomCard = deck[randomIndex];
    
        if (player === 1 && turnos > 5 && session.textContent === " Main Fase ") {
            mazeHandPlayer1.push(randomCard);
            console.log("Jugador 1 robó una carta: ", randomCard);
        } else if (player === 2 && turnos > 5 && session.textContent === " Main Fase ") {
            mazeHandPlayer2.push(randomCard);
            console.log("Jugador 2 robó una carta: ", randomCard);
        } else {
            console.log("No se ha robado ninguna carta.");
        }
    }

    function readDecks(){
        const selectedDeck = selectDeck();
        const deckToSelect = listArrayDecks.find(deck => deck.name === selectedDeck);
        console.log("Mazo seleccionado : " + selectedDeck);
    
        const selectedCards = deckToSelect.cards.slice(0, 5); 
    
        if (deckToSelect || turnos === 1 || turnos === 5) {
            console.log("Mazo seleccionado: " + selectedDeck);
            console.log("Cinco cartas seleccionadas: ", selectedCards);
            return selectedCards;
        } else {
            console.log("Mazo no encontrado");
            return [];
        }
    }

    function selectDeck(){
        const decksRandom = listArrayDecks;
        const randomIndex=Math.floor(Math.random()*decksRandom.length);
        const selectDeckRandom = decksRandom[randomIndex];
        return selectDeck;
    }

};