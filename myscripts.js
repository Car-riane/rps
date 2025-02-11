const CHOICE = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let computerChose = CHOICE[(Math.floor(Math.random() * CHOICE.length))];
  return computerChose;
}

function getHumanChoice() {
  let humanChose = prompt('Choose a weapon: rock, paper, or scissors');
  if (humanChose === null || humanChose.trim() === '') {
    alert('Please enter a valid choice');
    return getHumanChoice(); 
  }
  humanChose = humanChose.toLowerCase();
  if (!CHOICE.includes(humanChose)) {
    alert('Invalid choice. Please choose rock, paper, or scissors.');
    return getHumanChoice();
  }
  return humanChose;
}

let humanScore = 0;
let computerScore = 0;

function playround(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log('It\'s a Tie');
  }else if (
      (computerChoice === 'scissors' && humanChoice === 'rock') ||
      (computerChoice === 'paper' && humanChoice === 'scissors') ||
      (computerChoice === 'rock' && humanChoice === 'paper')
  ) {
    console.log(`You Win: ${humanChoice} beats ${computerChoice}`);
    humanScore ++;
  }else {
    console.log(`Computer Wins ${computerChoice} beats ${humanChoice}`);
    computerScore ++;
  }
}

function playGame () {
  for (let round = 0; round < 5; round++) {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playround(computer, human);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${humanScore}`);
  }
    
  if (computerScore > humanScore) {
      console.log('Computer is the Champion!')
  }else {
      console.log('You are the Champion!');
  }
}
    
playGame();