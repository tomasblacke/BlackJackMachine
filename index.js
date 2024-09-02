let firstCard
let secondCard
let sum = firstCard + secondCard
let hasBlackJack = false

if(sum < 21){
    console.log("Throw a new one")

}else if(sum === 21){
    console.log("Black jack")
    hasBlackJack=true

}else {
    console.log("Lose")


}