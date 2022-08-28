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

const difficultySection = document.querySelector('.difficulty-section')
const shuffleSection = document.querySelector('.shuffle-section')
const shuffle = document.querySelector('.shuffle')

const cardBackground = document.querySelector('.card-background')

const final = document.querySelector('.final-message')

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

    //делаем видимым меню выбора сложности
    difficultySection.classList.remove('hidden')

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
//обновляем счетчики
function updateCounter(){
    final.classList.add('hidden')
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

function getCard(){
    if(document.querySelector('.chosen-card')){
        document.querySelector('.chosen-card').remove();
    }
    let stage = 'firstStage'
    if(stages.firstStage.length === 0){
        stage = 'secondStage';
    }
    if(stages.secondStage.length === 0){
        stage = 'thirdStage';
    }
    if(stages.thirdStage.length === 0){
        final.classList.remove('hidden')
        return
/*         let final = document.createElement('p');
        final.innerHTML = 'There are no cards left!'
        shuffleSection.append(final)
        return */
    }
    let chosenCard = Math.floor(Math.random() * stages[stage].length);
    let objectCard = stages[stage][chosenCard];

    let card = document.createElement('div');
    card.classList.add('chosen-card')

    card.style.backgroundImage = `url(./assets/MythicCards/${objectCard.color}/${objectCard.cardFace})`
    shuffleSection.appendChild(card)

    stages[stage].splice(chosenCard, 1)
    console.log(stages[stage]);
    updateCounter();
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
    updateCounter();
})

cardBackground.addEventListener('click', () => {
    getCard();
})