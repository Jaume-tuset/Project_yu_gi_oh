import { home } from './pages/home.js';
import { rules } from './pages/game/rules.js';
import { decks } from './pages/cards/decks.js';
import { loginForm } from './pages/profile/login.js';
import { registerForm } from './pages/profile/register.js';
import { profileForm } from './pages/profile/profile.js';
import { interfaz } from './pages/interfaz/interfaze.js';
import { mostrarInterfaz2 } from './pages/interfaz/interfaze2.js';
import { game } from './pages/game/game.js';


export { route };

function route(ruta){

  console.log(ruta);
  let main = document.querySelector("#main");
  
  if (/#\/graph\/[0-9]+/.test(ruta)) {
    let graphID = ruta.split("/")[2];
    main.innerHTML = "";
    main.append(detail(graphID));
  } 
 
  else if(/#access_token=.*type=recovery$/.test(ruta)) {
    let datos = Object.fromEntries(ruta.substring(1).split('&').map(parametro => parametro.split('=')));
    loginWithToken(datos['access_token'],datos.expires_in);
    window.location.hash = "#/";
  }
  
  else {
    switch (ruta) {
      case "#/":
        main.innerHTML = "";
        main.append(home());
        break;
      case "#/rules":
        main.innerHTML = "";
        main.append(rules());
        break;    
      case "#/decks":
        main.innerHTML = "";
        main.append(decks());
        break;
      case "#/interfaz":
        main.innerHTML = "";
        main.append(interfaz());
        break;
      case "#/interfaz2":
        main.innerHTML = "";
        main.append(mostrarInterfaz2());
        break;
      case "#/game":
        main.innerHTML = " ";

        const apiUrl = 'https://gmlzjxsypdgmyloaxoze.supabase.co/rest/v1/players';
        const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbHpqeHN5cGRnbXlsb2F4b3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2NjcwNzIsImV4cCI6MjAxMzI0MzA3Mn0.CaZFMPDPIlHDMIl5lQaE5xaGWgPi5bvtpXdZvkYFLuk';

        async function obtenerDatosJugadores() {
          try {
            const response = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'apikey': apikey,
                'Authorization': `Bearer ${apikey}`,
                'Prefer': 'return=representation'
              },
            });
        
            if (response.ok) {
              const data = await response.json();

              if (data && data.length >= 2) {
                const jugador1 = data[data.length-1];
                const jugador2 = data[data.length-2];
                main.append(game(jugador1.nombre, jugador1.deck, jugador2.nombre, jugador2.deck));
              } else {
                console.error('No se encontraron suficientes datos de jugadores en Supabase.');
              }
            } else {
              console.error('Error al obtener datos de Supabase:', response.status, await response.text());
            }
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        }
        obtenerDatosJugadores();
        break;
      case "#/login":
        main.innerHTML = "";
        main.append(loginForm());
        break;
      case "#/register":
        main.innerHTML = "";
        main.append(registerForm());
        break;
      case "#/logout":
          logout();
          window.location.hash = "#/";
          break;
          case "#/profile":
            main.innerHTML = "";
        main.append(profileForm());
            break;
      case "":
        window.location.hash = "#/";
        break;
    }
  }

}
