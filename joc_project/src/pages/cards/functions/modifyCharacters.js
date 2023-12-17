export { modifyCharacter };

const modifyCharacter = () => {
    
    const deckContainer = document.createElement("div");
    deckContainer.classList.add("mazeContainer");
    
    data.data.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
    
        const cardImage = document.createElement("img");
        cardImage.classList.add("cardImage");
        cardImage.src = card.card_images[0].image_url;
        cardImage.alt = card.name;
      
        const cardType = document.createElement("p");
        cardType.classList.add("cardType");
        cardType.textContent = card.type;
    
        cardElement.appendChild(cardImage);
        deckContainer.appendChild(cardElement);
    
    });
    
    const decksContainers = document.querySelector(".deckContainer");
    decksContainers.innerHTML = ''; 
    decksContainers.appendChild(deckContainer);
        
}