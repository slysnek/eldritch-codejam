import {brownCards,blueCards,greenCards} from "./data/mythicCards/index.js"
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import cardsData from "./data/mythicCards/brown/index.js";
//колоды
const azathothDeck = document.querySelector('.azathoth')
const cthulthuDeck = document.querySelector('.cthulthu')
const iogsothothDeck = document.querySelector('.iogsothoth')
const shobniggurathDeck = document.querySelector('.shobniggurath')
//счетчики
const greenCardsСounter = document.querySelectorAll('.green');
const brownCardsСounter = document.querySelectorAll('.brown');
const blueCardsСounter = document.querySelectorAll('.blue');

const shuffle = document.querySelector('.shuffle')

let stages = {
    firstStage: [],
    secondStage: [],
    thirdStage: []
}


//собираем начальную колоду
function initializeDeck(creatureName){
    stages = {
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

function shuffleDeck(){
//обновление зеленого счетчика
    let counter = 0;
    let stage = 0;
    //луп по стейджам
    for (let b in stages){
        counter = 0;
        //луп по картам
        for(let c in stages[b]){
            if(stages[b][c].color === 'green'){
                counter++;
            }
        }
        greenCardsСounter[stage].innerHTML = counter;
        stage++;
    }
//обновление коричневого счетчика
counter = 0;
stage = 0;
for (let b in stages){
    counter = 0;
    for(let c in stages[b]){
        if(stages[b][c].color === 'brown'){
            counter++;
        }
    }
    brownCardsСounter[stage].innerHTML = counter;
    stage++;
}
//обновление голубого счетчика
counter = 0;
stage = 0;
for (let b in stages){
    counter = 0;
    for(let c in stages[b]){
        if(stages[b][c].color === 'blue'){
            counter++;
        }
    }
    blueCardsСounter[stage].innerHTML = counter;
    stage++;
}
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

shuffle.addEventListener('click', () => {
    shuffleDeck();
})