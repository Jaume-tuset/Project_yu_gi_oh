//reglas yu gi oh 
import '../../styles/rules.css';

export { rules };

const rules = () => {
    const main = document.querySelector(".main");
    main.appendChild(rulesInfo());
};

const rulesInfo = () => {
    const rulesDiv = document.createElement("div");
    rulesDiv.classList.add("rules-container"); // Agrega una clase para aplicar estilos si es necesario

    rulesDiv.innerHTML = `
        
    <h1>Yu-Gi-Oh! - Reglas del Juego</h1>

    <h2>Objetivo del Juego:</h2>
    <p>El objetivo principal en Yu-Gi-Oh! es reducir los Puntos de Vida (LP, Life Points) de tu oponente a cero.</p>

    <h2>Componentes del Mazo:</h2>
    <ul>
        <li><strong>Mazo Principal:</strong> Contiene al menos 40 cartas.</li>
        <li><strong>Mazo Extra:</strong> Contiene entre 0 y 15 cartas, como Monstruos de Fusión, Sincronía, Xyz o de Enlace.</li>
        <li><strong>Mazo Lado:</strong> Contiene entre 0 y 15 cartas intercambiables entre juegos.</li>
    </ul>

    <h2>Fases del Juego:</h2>
    <ol>
        <li><strong>Robo:</strong> Comienzas el juego robando 5 cartas.</li>
        <li><strong>Fase Principal 1:</strong> Puedes invocar Monstruos, Colocar Cartas Mágicas/Trampas y realizar otras acciones.</li>
        <li><strong>Batalla:</strong> Atacas con tus Monstruos en esta fase.</li>
        <li><strong>Fase Principal 2:</strong> Similar a la Fase Principal 1, pero después de la Batalla.</li>
        <li><strong>Fin del Turno:</strong> Pasas al siguiente jugador.</li>
    </ol>

    <h2>Tipos de Cartas:</h2>
    <ul>
        <li><strong>Monstruos:</strong> Tienen niveles o estrellas. Pueden ser Normales, de Efecto, de Ritual, de Fusión, de Sincronía, Xyz o de Enlace.</li>
        <li><strong>Cartas Mágicas:</strong> Proporcionan efectos beneficiosos.</li>
        <li><strong>Cartas de Trampa:</strong> Se activan en respuesta a ciertas acciones del oponente.</li>
    </ul>

    <h2>Invocación de Monstruos:</h2>
    <ul>
        <li><strong>Invocación Normal:</strong> Colocar un Monstruo boca arriba.</li>
        <li><strong>Invocación Especial:</strong> Invocar Monstruos con condiciones específicas.</li>
        <li><strong>Monstruos de Fusión, Sincronía, Xyz o de Enlace:</strong> Requieren condiciones especiales y se colocan en el Mazo Extra.</li>
    </ul>

    <h2>Fases del Duelo:</h2>
    <ol>
        <li><strong>Inicio:</strong> Se decide quién va primero.</li>
        <li><strong>Robo:</strong> Se roban cartas al inicio del turno.</li>
        <li><strong>Preparación:</strong> Se resuelven efectos de inicio de turno.</li>
        <li><strong>Fase Principal 1:</strong> Se pueden invocar Monstruos y jugar Cartas Mágicas/Trampas.</li>
        <li><strong>Batalla:</strong> Se ataca al oponente.</li>
        <li><strong>Fase Principal 2:</strong> Se pueden invocar más Monstruos y jugar más Cartas Mágicas/Trampas.</li>
        <li><strong>Fin del Turno:</strong> Se resuelven efectos de fin de turno.</li>
    </ol>

    <h2>Condiciones de Victoria o Derrota:</h2>
    <ul>
        <li><strong>Victoria:</strong> Reducción de los LP del oponente a cero.</li>
        <li><strong>Derrota:</strong> No poder robar al inicio del turno por no tener cartas en el Mazo.</li>
    </ul>

    <p>Estas son solo las reglas básicas. Yu-Gi-Oh! ha evolucionado con el tiempo, y nuevas mecánicas y tipos de cartas se han agregado al juego. Te recomendaría revisar el manual oficial del juego y las cartas más recientes para obtener información detallada sobre las reglas actuales.</p>

    `;

    return rulesDiv;
};
