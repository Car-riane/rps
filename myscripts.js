const CHOICE = ['rock', 'paper', 'scissors'];
const computerChoiceDisplay = document.querySelector('#computer');
const humanChoiceDisplay = document.querySelector('#player');
const resultsDisplay = document.querySelector('#result');
const finalScoreDisplay = document.querySelector('#finalscore');
const humanScoreDisplay = document.querySelector('#playerscore');
const computerScoreDisplay  = document.querySelector('#computerscore');
const winnerDisplay = document.querySelector('h1');
const roundDisplay = document.querySelector('#round');

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
  return CHOICE[(Math.floor(Math.random() * CHOICE.length))];
}

function playround(computerChoice, humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }
  if (computerChoice === humanChoice) {
    resultsDisplay.textContent = 'It\'s a Tie';
  }else if (
      (computerChoice === 'scissors' && humanChoice === 'rock') ||
      (computerChoice === 'paper' && humanChoice === 'scissors') ||
      (computerChoice === 'rock' && humanChoice === 'paper')
  ) {
    resultsDisplay.textContent = `You Win: ${humanChoice} beats ${computerChoice}`;
    humanScore ++;
  }else {
    resultsDisplay.textContent = `Computer Wins ${computerChoice} beats ${humanChoice}`;
    computerScore ++;
  }

  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  humanChoiceDisplay.textContent = `You chose: ${humanChoice}`;
  humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

  if (humanScore >= 5) {
    winnerDisplay.textContent = 'You are the Champion!';
  }else if (computerScore >= 5) {
   winnerDisplay.textContent = 'Computer is the Champion!';
   disableButtons();
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    roundCount++;
    roundDisplay.textContent = `Round: ${roundCount}`;
    playround(computerChoice, humanChoice);
  });
});

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}