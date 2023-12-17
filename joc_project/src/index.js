import { createNav } from "./views/nav.js"
import { footer } from "./views/footer.js"
import { route } from "./router.js"

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        let container = document.querySelector("#container");
        container.append(createNav());
        
        let main = document.createElement("div");
        main.id = "main";
        main.classList.add("main");
        container.append(main);

        //redirecciona al #/
        route(window.location.hash);
        
        container.append(footer());

        window.addEventListener('hashchange',function hasChanged(){
            route(window.location.hash);
        });
    });
})();




