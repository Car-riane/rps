const CHOICE = ['rock', 'paper', 'scissors'];

const getComputerChoice = CHOICE[(Math.floor(Math.random() * CHOICE.length))];
console.log(getComputerChoice);

const getHumanChoice = prompt('Choose a weapon: rock, paper, or scissors').toLowerCase;
console.log(getHumanChoice);

let humanScore = 0;
let computerScore = 0;
round = 0;

function playround(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log('It\'s a Tie');
    humanScore += 1;
    computerScore +=1;
  }elsif (computerChoice == 'scissors' && humanChoice == 'rock') {
    console.log('You Win!');
    humanScore +=1;
  }elsif (computerChoice == 'paper' && humanChoice == 'scissors' ) {
    console.log('You Win!');
    humanScore +=1;
  }elsif (computerChoice == 'rock' && humanChoice == 'paper') {
    console.log('You Win!');
    humanScore +=1;
  }else {
    console.log('Computer Wins!');
    computerScore +=1;
  }

  round += 1;
  console.log(round);
}


const player = getHumanChoice;
const computer = getComputerChoice;



while (round < 6) {
  playround(computer, player);
  console.log(computerScore);
  console.log(humanScoreScore);
  
  if computerScore > humanScore {
    console.log('Computer is the Champion!')
  }else {
    console.log('You are the Champion!');
  }
}