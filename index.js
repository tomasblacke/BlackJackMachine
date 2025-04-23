let player = {/*Hacemos el objeto jugador*/

    name: "player",
    chips: 40
}

let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let playerNameSet = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newCardEl = document.getElementById("newCard-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.getElementById("dealer-el")
let dealerWin = true
let userNameCatch = document.getElementById("catch-el")
let userMenu= document.getElementById("user-el")
let playerNameDisplay = document.getElementById("player-name");


let mesaEl = document.querySelector('.mesa');
let restartEl=document.getElementById('restart-el');
let startGameEl=document.getElementById('startGame');
let stayGameEl=document.getElementById('stay-el');
let brokeEl=document.getElementById('broke-el');

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    console.log(audio.volume);
    cardEl.textContent=""
    dealerEl.textContent=" "
    dealerWin=false
    isAlive = true
    hasBlackJack= false
    player.chips-=20
    playerEl.textContent = player.name + ": $" + player.chips


    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber >10){
    return 10
    }
    else{
        return randomNumber
    }
}

function renderGame(){
    for(let i = 0; i< cards.length; i++){

        cardEl.textContent += cards[i] + " - "
    }
    
    sumEl.textContent = "Total: " + sum
    if(sum <= 20){
        message ="Throw a new one"
        
    }else if(sum === 21){
        message = "Black jack!You win $40"
        hasBlackJack=true
        player.chips+=60
        playerEl.textContent = player.name + ": $" + player.chips

    }else {
        message = "Lose $20"
        isAlive = false
        playerEl.textContent = player.name + ": $" + player.chips
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive && !hasBlackJack){

        let card = getRandomCard()
        sum += card
        cards.push(card)
        cardEl.textContent=""
        renderGame()
    }
}
function stayOption(){
    if(isAlive && !hasBlackJack){

        let firstCardDealer = getRandomCard()
        let secondCardDealer = getRandomCard()
        let cardsDealer = [firstCardDealer, secondCardDealer]
        let sumDealer = firstCardDealer + secondCardDealer
        if(sumDealer <=21 && sumDealer< sum){
            let cardB=getRandomCard()
            sumDealer+= cardB
            cardsDealer.push(cardB)   
        }   
        dealerEl.textContent=" "
        for(let i=0;i<cardsDealer.length;i++){
            dealerEl.textContent+=cardsDealer[i] + "-"
            }
        if(sumDealer>sum && sumDealer<22){
            dealerWin=true    
        }
        else{
            dealerWin=false
        }
        dealerMessage(dealerWin)
        isAlive=false//prevents continous stay
    }
}
function dealerMessage(result){
    if(result){
        messageEl.textContent="You ´ve lost $20"
        if(player.chips<=0){
            /*Esto lo agregue nuevo*/ 
            restartEl.hidden=false;
            brokeEl.hidden=false;

            startGameEl.hidden=true;
            newCardEl.hidden=true;
            stayGameEl.hidden=true;

            dealerEl.textContent = "";
            sumEl.textContent = "";
            cardEl.textContent = "";


            messageEl.textContent+=". You are broke :("
            isAlive=false;
        }
            
    }
    else{
        player.chips+=20
        messageEl.textContent="You ´ve won $20"
    }
    playerEl.textContent = player.name + ": $" + player.chips
}
function setUsername(){
    if(!playerNameSet){
        player.name=userNameCatch.value
        playerEl.textContent = player.name + ": $" + player.chips
        userMenu.hidden=true;
        
    }else{
        alert("You are already playing")
    }
    playerNameSet=true
}
function restart(){
    restartEl.hidden= true;
    player.chips=200;
    startGameEl.hidden=false;
    newCardEl.hidden=false;
    stayGameEl.hidden=false;
    playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = "Let's Play!";
    brokeEl.hidden=true;
    /*userMenu.hidden=false;*/

}

/*SECCION AUDIO*/
const audio = document.getElementById('myAudio');

function toggleMute() {
  audio.muted = !audio.muted;
}
window.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
  });