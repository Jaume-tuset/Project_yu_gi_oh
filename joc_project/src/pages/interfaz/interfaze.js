import "../../styles/interfaz.css";
import { mostrarInterfaz2 } from "./interfaze2";

const interfaz = () => {
  let divInterfaz = document.createElement("div");
  divInterfaz.classList.add("continerInterfaze");

  let interfaz = document.createElement("div");
  interfaz.id = "interfaz";

  let videoInterfaz = document.createElement("video");
  videoInterfaz.classList.add("videoInterfaze");
  videoInterfaz.src =
    "https://gmlzjxsypdgmyloaxoze.supabase.co/storage/v1/object/public/video/loadPage.mp4?t=2023-11-23T18%3A16%3A22.151Z";
  videoInterfaz.autoplay = true;
  videoInterfaz.loop = true;
  videoInterfaz.muted = true;

  let audioBackground = document.createElement("audio");
  audioBackground.src =
    "https://gmlzjxsypdgmyloaxoze.supabase.co/storage/v1/object/public/sounds/Voicy_YuGiOh%20background%20soundtrack%20.mp3?t=2023-11-23T18%3A24%3A39.762Z";
  audioBackground.autoplay = true;
  audioBackground.loop = true;
  audioBackground.muted = false;

  let divInitGame = document.createElement("button");
  divInitGame.id = "init";
  divInitGame.textContent = "Inicio";
  divInitGame.addEventListener("click", () => {
    interfaz.innerHTML="";
    mostrarInterfaz2();
    window.location.href="#/interfaze2";

  });

  let divRulesGame = document.createElement("button");
  divRulesGame.id = "rules";
  divRulesGame.textContent = "Rules";
  divRulesGame.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/#/rules";
  });

  interfaz.appendChild(videoInterfaz);
  interfaz.appendChild(audioBackground);
  interfaz.appendChild(divInitGame);
  interfaz.appendChild(divRulesGame);
  divInterfaz.appendChild(interfaz);

  return divInterfaz;
};

export { interfaz };
