//19:25 coding with Rob part 2
const options = ["rock", "paper", "scissors"]; //Global variable
const winners = [];//empty array to log wins

function game() {
    for (let i = 0; i <= 4; i++) {
        playRound();
    }  
    logWins();
}

function playRound() {
    //plays a single round 
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    console.log(computerSelection)
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
}

function playerChoice() {
    //get input from player
    let input = prompt ("Choose rock, paper or scissors")
    input = input.toLowerCase();
    console.log(input)
    return input;
}

function computerPlay() {
    //get input from computer
    return options[Math.floor(Math.random() *options.length)];
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie!";
    } else if (
      (choiceP == "rock" && choiceC == "scissors") ||
      (choiceP == "paper" && choiceC == "rock") ||
      (choiceP == "scissors" && choiceC == "paper") 
    ) {    
        return "You win!";
    } else {
        return "You lose!";
    }
}

function logWins() {
    let playerWins = winners.filter (item => item == "You win!").length;
    let computerWins = winners.filter (item => item == "You lose!").length;
    let ties = winners.filter (item => item == "Tie!").length
    console.log("Results:");
    console.log("Player wins:",playerWins);
    console.log("Computer wins:",computerWins);
    console.log("Ties:",ties);
}

game(); 