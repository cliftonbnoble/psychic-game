//global variables
let letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let zoltanGuess = [];
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];

zoltanGuess = letterBank[Math.floor(Math.random() * letterBank.length)];

function reset() {
    zoltanGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
    guessesLeft = 10;
    guessesSoFar = [];
}



document.onkeyup = function (event) {
    let userGuess = event.key.toLowerCase();

    if (choices.indexOf(userGuess) > -1) {
        if (userGuess !== zoltanGuess && guessesSoFar.indexOf(userGuess) > 0) {
            guessesLeft--;
            guessesSoFar.push(""+ userGuess);
        } if (guessesLeft === 0) {
            losses++;
            reset();
        } if (userGuess === zoltanGuess) {
            wins++;
            alert("Correct! You Guessed what Zoltan was Thinking = " + zoltanGuess);
            reset();
        }
    } else {
        
    }
    

    // startGame();
    console.log('guesses so far ' + guessesSoFar);
    console.log("user guess " + userGuess);
    console.log("zoltan guess " + zoltanGuess);
    document.getElementById('guesses-so-far').innerHTML = guessesSoFar;
    document.getElementById('guesses-left').innerHTML= guessesLeft;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
}
    
//ids from the html, "guesses-so-far", "guesses-left", "losses", "wins"