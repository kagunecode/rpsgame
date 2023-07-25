function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let option = Math.floor(Math.random() * choices.length)
    return choices[option]
}

function getResult(playerChoice, computerChoice) {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
    console.log(`The CPU played ${computerChoice}`)
    console.log(`The user played ${playerChoice}`)
    if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        return `${playerChoice} is not a valid option. Options are rock, paper or scissors`
    } else if (playerChoice === computerChoice) {
        return `It's a draw! You both played ${playerChoice}`
    } else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
    playerChoice == "Scissors" && computerChoice === "Paper" ||
    playerChoice == "Paper" && computerChoice === "Rock") {
        return `Congrats, you won! ${playerChoice} beats ${computerChoice}`
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }    
}

function scoreCounter(result, userScore, cpuScore, drawScore, userDiv, cpuDiv, drawDiv) {`button[data-value]`
    if(result.includes('won')) {
        userScore += 1;
        userDiv.innerText = userScore;
        return 'user won'
    } else if (result.includes('lose')) {
        cpuScore += 1;
        cpuDiv.innerText = cpuScore;
        return 'cpu won'
    } else {
        drawScore += 1;
        drawDiv.innerText = drawScore;
        return 'draw'
    }
}

let userScore = 0;
let cpuScore= 0;
let drawScore = 0;
const userButton = document.querySelectorAll('#button-choice');
const resultDiv = document.querySelector('#result');
const userCount = document.querySelector('#user');
const cpuCount = document.querySelector('#cpu');
const drawCount = document.querySelector('#draws');
const headerText = document.querySelector('.header-title');

userButton.forEach(button => button.addEventListener('click', (e) =>{
    computer = getComputerChoice();
    game = getResult(e.target.innerText, computer);
    result = scoreCounter(game, userScore, cpuScore, drawScore, userCount, cpuCount, drawCount);
    resultDiv.innerText = game;
    headerText.innerText = `The CPU played ${computer}` ;
    if (result.includes('user won')) {
        userScore += 1;
    } else if (result.includes('cpu won')) {
        cpuScore += 1;
    } else {
        drawScore += 1;
    }
}))
