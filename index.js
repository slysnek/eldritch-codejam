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
//секции и кнопки
const difficultySection = document.querySelector('.difficulty-section')
const shuffleSection = document.querySelector('.shuffle-section')
const shuffle = document.querySelector('.shuffle')

const stagesWrapper = document.querySelector('.stages-wrapper')
const cardBackground = document.querySelector('.card-background')
const final = document.querySelector('.final-message')
//сложности
const veryEasy = document.querySelector('.very-easy')
const easy = document.querySelector('.easy')
const normal = document.querySelector('.normal')
const hard = document.querySelector('.hard')
const veryHard = document.querySelector('.very-hard')

let stages = {
    firstStage: [],
    secondStage: [],
    thirdStage: []
}

let creature;
let difficulty;

//собираем начальную колоду
function initializeDeck(creatureName, difficulty){
    stages = {
        firstStage: [],
        secondStage: [],
        thirdStage: []
    }

    for (let i in ancientsData){
        if (ancientsData[i].id === creatureName){
            creature = ancientsData[i];
        }
    }

    if(difficulty === 'normal'){
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
    } else if (difficulty === 'easy'){
        //добавляем карты в первый стейдж
        let i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'hard'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'hard'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.blueCards)
        
        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'hard'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.brownCards)

        //добавляем карты во второй стейдж
        i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'hard'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'hard'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.blueCards)

        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'hard'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.brownCards)

        //добавляем карты в третий стейдж
        i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'hard'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'hard'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.blueCards)

        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'hard'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.brownCards)

        console.log(stages.firstStage);
        console.log(stages.secondStage);
        console.log(stages.thirdStage);
    }  else if (difficulty === 'hard'){
        //добавляем карты в первый стейдж
        let i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'easy'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'easy'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.blueCards)
        
        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'easy'){
                stages.firstStage.push(card)
                i++;
            }
        } while(i<creature.firstStage.brownCards)

        //добавляем карты во второй стейдж
        i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'easy'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'easy'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.blueCards)

        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'easy'){
                stages.secondStage.push(card)
                i++;
            }
        } while(i<creature.secondStage.brownCards)

        //добавляем карты в третий стейдж
        i = 0;
        do{
            let card = greenCards[Math.floor(Math.random() * greenCards.length)]
            if (card.difficulty !== 'easy'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.greenCards)

        i = 0;
        do{
            let card = blueCards[Math.floor(Math.random() * blueCards.length)]
            if (card.difficulty !== 'easy'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.blueCards)

        i = 0;
        do{
            let card = brownCards[Math.floor(Math.random() * brownCards.length)]
            if (card.difficulty !== 'easy'){
                stages.thirdStage.push(card)
                i++;
            }
        } while(i<creature.thirdStage.brownCards)

        console.log(stages.firstStage);
        console.log(stages.secondStage);
        console.log(stages.thirdStage);
    }
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
//раздача карт
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

//древние
azathothDeck.addEventListener('click', () => {
    if(document.querySelector('.active')){
        document.querySelector('.active').classList.remove('active')
        azathothDeck.classList.add('active')
    } else {
        azathothDeck.classList.add('active')
    }
    
    //делаем видимым меню выбора сложности
    difficultySection.classList.remove('hidden')
    creature = 'azathoth'
})
cthulthuDeck.addEventListener('click', () => {
    if(document.querySelector('.active')){
        document.querySelector('.active').classList.remove('active')
        cthulthuDeck.classList.add('active')
    } else {
        cthulthuDeck.classList.add('active')
    }
    
    //делаем видимым меню выбора сложности
    difficultySection.classList.remove('hidden')
    creature = 'cthulhu'
})
iogsothothDeck.addEventListener('click', () => {
    if(document.querySelector('.active')){
        document.querySelector('.active').classList.remove('active')
        iogsothothDeck.classList.add('active')
    } else {
        iogsothothDeck.classList.add('active')
    }
    
    //делаем видимым меню выбора сложности
    difficultySection.classList.remove('hidden')
    creature = 'iogSothoth'
})
shobniggurathDeck.addEventListener('click', () => {
    if(document.querySelector('.active')){
        document.querySelector('.active').classList.remove('active')
        shobniggurathDeck.classList.add('active')
    } else {
        shobniggurathDeck.classList.add('active')
    }
    
    //делаем видимым меню выбора сложности
    difficultySection.classList.remove('hidden')
    creature = 'shubNiggurath'
})

//сложности
veryEasy.addEventListener('click', () => {
    if(document.querySelector('.active-difficulty')){
        document.querySelector('.active-difficulty').classList.remove('active-difficulty')
        veryEasy.classList.add('active-difficulty')
    } else {
        veryEasy.classList.add('active-difficulty')
    }
    shuffle.classList.remove('hidden')
    difficulty = "very easy"
})

easy.addEventListener('click', () => {
    if(document.querySelector('.active-difficulty')){
        document.querySelector('.active-difficulty').classList.remove('active-difficulty')
        easy.classList.add('active-difficulty')
    } else {
        easy.classList.add('active-difficulty')
    }
    shuffle.classList.remove('hidden')
    difficulty = "easy"
})

normal.addEventListener('click', () => {
    if(document.querySelector('.active-difficulty')){
        document.querySelector('.active-difficulty').classList.remove('active-difficulty')
        normal.classList.add('active-difficulty')
    } else {
        normal.classList.add('active-difficulty')
    }
    shuffle.classList.remove('hidden')
    difficulty = "normal"
})

hard.addEventListener('click', () => {
    if(document.querySelector('.active-difficulty')){
        document.querySelector('.active-difficulty').classList.remove('active-difficulty')
        hard.classList.add('active-difficulty')
    } else {
        hard.classList.add('active-difficulty')
    }
    shuffle.classList.remove('hidden')
    difficulty = "hard"
})

veryHard.addEventListener('click', () => {
    if(document.querySelector('.active-difficulty')){
        document.querySelector('.active-difficulty').classList.remove('active-difficulty')
        veryHard.classList.add('active-difficulty')
    } else {
        veryHard.classList.add('active-difficulty')
    }
    shuffle.classList.remove('hidden')
    difficulty = "very hard"
})

//кнопки
shuffle.addEventListener('click', () => {
    stagesWrapper.classList.remove('hidden')
    cardBackground.classList.remove('hidden')
    shuffle.classList.add('hidden')
    initializeDeck(creature, difficulty)
    updateCounter();
})
cardBackground.addEventListener('click', () => {
    getCard();
})

