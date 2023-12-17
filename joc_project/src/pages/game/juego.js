const inicializarJuego = (player1, player2) => {
    console.log("Juego inicializado");
  };
  
  // Función para invocar un monstruo
  const invocarMonstruo = (jugador, monstruo) => {
    console.log(`${jugador.getNombre()} invoca a ${monstruo}`);
  };
  
  // Función para activar un hechizo o trampa
  const activarHechizoTrampa = (jugador, carta) => {
    console.log(`${jugador.getNombre()} activa ${carta}`);
  };
  
  // Función para realizar un turno de juego
  const turnoDeJuego = (jugador) => {
    console.log(`${jugador.getNombre()} realiza su turno`);
  };

  const pedirCarta = (jugador) => {
    const mazo = jugador.getMazo();
    
    // Verifica si el mazo tiene cartas restantes
    if (mazo.length > 0) {
      // Remueve la carta del mazo y agrégala a la mano del jugador
      const cartaPedida = mazo.shift();
      jugador.agregarCartaAMano(cartaPedida);
  
      console.log(`${jugador.getNombre()} pide una carta: ${cartaPedida}`);
    } else {
      console.log(`${jugador.getNombre()} no puede pedir más cartas, el mazo está vacío.`);
    }
  };
  
  
  export { inicializarJuego, invocarMonstruo, activarHechizoTrampa, turnoDeJuego, pedirCarta};
  