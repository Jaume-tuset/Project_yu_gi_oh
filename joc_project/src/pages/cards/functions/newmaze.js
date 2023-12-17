
import "../../../styles/newDeck.css";

export { newMaze };

const newMaze = () => {
    let cont = 0;

    const deckContainer = document.createElement("div");
    deckContainer.classList.add("mazeContainer");

    const cardsSelect = document.createElement("div");
    cardsSelect.classList.add("cardsSelect");

    const categorie = document.createElement("div");
    categorie.classList.add("categorie");

    const monster = document.createElement("button");
    monster.id = "monster";
    const spell = document.createElement("button");
    spell.id = "spell";
    const trap = document.createElement("button");
    trap.id = "trap";

    categorie.appendChild(monster);
    categorie.appendChild(spell);
    categorie.appendChild(trap);

    const showAllCards = async () => {
        try {
            const response = await fetch(
                `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes`
            );
            const data = await response.json();

            const deckContainer = document.createElement("div");
            deckContainer.classList.add("fetchDeckContainer");

            data.data.forEach((card) => {
                const cardElement = document.createElement("div");
                cardElement.classList.add("card");

                const cardImage = document.createElement("img");
                cardImage.classList.add("cardImage");
                cardImage.src = card.card_images[0].image_url;
                cardImage.alt = card.name;

                cardElement.appendChild(cardImage);
                deckContainer.appendChild(cardElement);
            });

            const decksContainers = document.querySelector(".deckContainer");
            decksContainers.innerHTML = "";
            decksContainers.appendChild(deckContainer);
        } catch (error) {
            console.error("Error al obtener las cartas:", error);
        }
    };

    const cardsNewMaze = document.createElement("div");
    cardsNewMaze.classList.add("cardsNewMaze");

    const numCards = document.createElement("div");
    numCards.classList.add("numCards");
    numCards.innerHTML = `<p>Número de cartas: ${cont}</p>`;

    const listNewDeck = document.createElement("div");
    listNewDeck.classList.add("listNewDeck");

    const addCardButton = document.createElement("button");
    addCardButton.innerText = "Añadir";

    const delCardButton = document.createElement("button");
    delCardButton.innerText = "Eliminar";

    cardsSelect.appendChild(categorie);
    //showAllCards(); 
    deckContainer.appendChild(cardsSelect);

    cardsNewMaze.appendChild(addCardButton);
    cardsNewMaze.appendChild(delCardButton);
    cardsNewMaze.appendChild(numCards);
    cardsNewMaze.appendChild(listNewDeck);
    deckContainer.appendChild(cardsNewMaze);

    const decksContainers = document.querySelector(".deckContainer");
    decksContainers.innerHTML = "";
    decksContainers.appendChild(deckContainer);
};