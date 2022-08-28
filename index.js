import {brownCards,blueCards,greenCards} from "./data/mythicCards/index.js"
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import cardsData from "./data/mythicCards/brown/index.js";

const azathothDeck = document.querySelector('.azathoth')
const cthulthuDeck = document.querySelector('.cthulthu')
const iogsothothDeck = document.querySelector('.iogsothoth')
const shobniggurathDeck = document.querySelector('.shobniggurath')

//собираем начальную колоду
function initializeDeck(creatureName){
    let stages = {
        firstStage: [],
        secondStage: [],
        thirdStage: []
    }

    let creature;
    for (let i in ancientsData){
        if (ancientsData[i].id === creatureName){
            creature = ancientsData[i];
        }
    }
    
    //добавляем карты в первый стейдж
    for(let i = 0; i < creature.firstStage.greenCards; i++){
        stages.firstStage.push(greenCards[Math.floor(Math.random() * greenCards.length)])
    }
    for(let i = 0; i < creature.firstStage.blueCards; i++){
        stages.firstStage.push(blueCards[Math.floor(Math.random() * blueCards.length)])
    }
    for(let i = 0; i < creature.firstStage.brownCards; i++){
        stages.firstStage.push(brownCards[Math.floor(Math.random() * brownCards.length)])
    }
    //добавляем карты во второй стейдж
    for(let i = 0; i < creature.secondStage.greenCards; i++){
        stages.secondStage.push(greenCards[Math.floor(Math.random() * greenCards.length)])
    }
    for(let i = 0; i < creature.secondStage.blueCards; i++){
        stages.secondStage.push(blueCards[Math.floor(Math.random() * blueCards.length)])
    }
    for(let i = 0; i < creature.secondStage.brownCards; i++){
        stages.secondStage.push(brownCards[Math.floor(Math.random() * brownCards.length)])
    }
    //добавляем карты в третий стейдж
    for(let i = 0; i < creature.thirdStage.greenCards; i++){
        stages.thirdStage.push(greenCards[Math.floor(Math.random() * greenCards.length)])
    }
    for(let i = 0; i < creature.thirdStage.blueCards; i++){
        stages.thirdStage.push(blueCards[Math.floor(Math.random() * blueCards.length)])
    }
    for(let i = 0; i < creature.thirdStage.brownCards; i++){
        stages.thirdStage.push(brownCards[Math.floor(Math.random() * brownCards.length)])
    }

    console.log(stages.firstStage);
    console.log(stages.secondStage);
    console.log(stages.thirdStage);

}


azathothDeck.addEventListener('click', () => {
    initializeDeck('azathoth')
})

cthulthuDeck.addEventListener('click', () => {
    initializeDeck('cthulhu')
})

iogsothothDeck.addEventListener('click', () => {
    initializeDeck('iogSothoth')
})

shobniggurathDeck.addEventListener('click', () => {
    initializeDeck('shubNiggurath')
})