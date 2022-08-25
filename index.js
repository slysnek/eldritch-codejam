import {brownCards,blueCards,greenCards} from "./data/mythicCards/index.js"
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";

let deckWrapper = document.querySelector('.deck-wrapper');

function initializeDecks(){
    for (let i = 0; i < ancientsData.length; i++) {
        let deck = document.createElement('div');
        deck.classList.add('deck')
        deck.style.backgroundImage = `url(./assets/Ancients/${ancientsData[i].cardFace})`
        deckWrapper.appendChild(deck)
    }
}

initializeDecks()