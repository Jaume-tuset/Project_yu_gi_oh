import { Tablero } from '../pages/game/tablero.js';
import { Jugador } from '../pages/game/jugador.js';
/*import Image from 'https://gmlzjxsypdgmyloaxoze.supabase.co/storage/v1/object/public/imagenes/characters/yami_yugo.png?t=2023-10-27T08%3A26%3A27.535Z'; */

const game = () => {
  let container = document.querySelector("#container");

  const tablerosContainer = document.createElement("div");
  tablerosContainer.id = "tableroContainer";
  
  const miTablero = new Tablero(3, 6);
  miTablero.modificarValor(0, 0, 1);
  miTablero.modificarValor(1, 3, 1);
  
  for (let jugador = 1; jugador <= 2; jugador++) {
    const tableroDiv = document.createElement("div");
    tableroDiv.id = `tablero${jugador}`;
    
    const tabla = document.createElement('table');
  
    for (let fila = 0; fila < miTablero.filas; fila++) {
      const tr = document.createElement('tr');
      for (let columna = 0; columna < miTablero.columnas; columna++) {
        const celdaHTML = document.createElement('td');
        celdaHTML.className = 'celda';
        const valorEnArray = (fila * miTablero.columnas) + columna + 1;

        if ((jugador === 1 && ( valorEnArray >= 2 && valorEnArray <= 5 || valorEnArray == 7 || valorEnArray == 12 )) 
        ||  (jugador === 2 && ( valorEnArray >= 14 && valorEnArray <= 17 || valorEnArray == 7 || valorEnArray == 12 ))) {
          celdaHTML.innerHTML = "";
          celdaHTML.style.border="none";
        } else {
          celdaHTML.innerHTML = valorEnArray;
        }
        tr.appendChild(celdaHTML);
      }
      tabla.append(tr);
    }
  
    tableroDiv.appendChild(tabla);
    tablerosContainer.appendChild(tableroDiv);
  }
  
  let player1 = document.createElement("div");
  player1.classList.add("player1");
  
  let player2 = document.createElement("div");
  player2.classList.add("player2");

  let imgP1= new Image();
  let imgP2= new Image();

  /*player1.append(imgP1);
  player2.append(imgP2);*/
  
  container.append(player1);
  container.append(player2);
  container.appendChild(tablerosContainer);
  
};

export { game };

