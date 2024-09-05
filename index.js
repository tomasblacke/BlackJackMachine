let player = {/*Hacemos el objeto jugador*/

    name: "Tomas",
    chips: 200
}

let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newCardEl = document.getElementById("newCard-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.getElementById("dealer-el")
let dealerWin = true


playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    cardEl.textContent=""
    dealerEl.textContent=" "
    dealerWin=false
    isAlive = true
    hasBlackJack= false
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
        message = "Black jack!You win $100"
        hasBlackJack=true
        player.chips+=100
        playerEl.textContent = player.name + ": $" + player.chips

    }else {
        message = "Lose $20"
        isAlive = false
        player.chips-=20
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
    }
}
function dealerMessage(result){
    if(result){
        messageEl.textContent="You ´ve lost $20"
        player.chips-=20
            
    }
    else{
        player.chips+=40
        messageEl.textContent="You ´ve won $40"
    }
    playerEl.textContent = player.name + ": $" + player.chips
}