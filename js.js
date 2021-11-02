function guessGame() {
    let randomNr = Math.floor(Math.random() * 11),
    guess;
    console.log(randomNr);

    do {
        guess = +prompt('Guess a number between 0 and 10');
        if (guess < randomNr) {
            console.log('You guessed too low');
        } else if (guess < randomNr){
            console.log('You guessed too high');
        }
    } while (guess != randomNr);
console.log("WON");
}


guessGame();