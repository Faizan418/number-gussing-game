function play(){

let secretNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = parseInt(prompt("Guess the secret number (1-10):"));

if(userGuess === secretNumber){
    var message = ("Bingo! Correct Answer.");
}else if(userGuess + 1 === secretNumber){
    var message = ("Close, enough to the correct answer.");
}else{
    var message = ("Sorry, your guess is not correct.");
}

const gameBox = document.getElementById("game-box");
    gameBox.innerHTML = `
        <p>guess: ${message}</p>
    `;


}