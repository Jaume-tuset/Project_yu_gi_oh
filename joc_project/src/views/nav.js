import '../styles/nav_style.css';
/* import { getProfile, isLogged } from "../services/users.js"; */
import Logo from '../assets/logo/logo.svg';
import Perfil from '../assets/img/perfil.png';

export { createNav };

function createNav(){
    
   const img = new Image();
   img.src = Logo;  

   const perfil = new Image();
   perfil.src = Perfil;


   const menuDiv = document.createElement("div");
   menuDiv.id="header";
   menuDiv.innerHTML=`
    <nav class="flex align-center">
        <img src="${img.src}" alt="">
        <ul>
            <li class="big-screens">
                <a href="#/">Inicio</a>
                <a href="#/rules">Reglas</a>
                <a href="#/decks">Decks</a>
                <a href="#/interfaz">Game</a>
                <a class="btn register" href="#/registrer" id="registerButton">Register</a>
                <a class="btn login" href="#/login" id="loginButton">Log In</a>
                <a href="#/profile"> 
                    <img src="${perfil.src}" id="img_perfil" alt="">
                </a>
                
            </li>
        </ul>
    </nav>
   `;

   return menuDiv;
}



