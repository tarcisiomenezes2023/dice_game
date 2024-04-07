/* First Dice ------------------------- */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png"

var randomSource1 = "images/" + randomImage1

var randomDice1 = document.querySelectorAll("img")[0]
randomDice1.setAttribute("src", randomSource1)

/* Second Dice -------------------------------------- */

var randomNumber2 = Math.floor(Math.random() * 6) +1

var randomImage2 = "dice" + randomNumber2 + ".png"

var randomSource2 = "images/" + randomImage2

var randomDice2 = document.querySelectorAll("img")[1]
randomDice2.setAttribute("src", randomSource2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥳 Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 wins!"
}
else {
    document.querySelector("h1").innerHTML = "🚩 Draw!"
}