let firstCard = 10
let secondCard = 4
let cards =[]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newCardEl = document.getElementById("newCard-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardEl.textContent = firstCard + " - " + secondCard + cards
    sumEl.textContent = "Total: " + sum
    if(sum < 21){
        message ="Throw a new one"
        
    }else if(sum === 21){
        message = "Black jack"
        hasBlackJack=true

    }else {
        message = "Lose"
        isAlive = false
    }
    messageEl.textContent=message
}
function newCard(){
    let card =8
    sum += card

    renderGame()
}