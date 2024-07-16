const CHOICE = ['rock', 'paper', 'scissors'];

const getComputerChoice = CHOICE[(Math.floor(Math.random() * CHOICE.length))];
console.log(getComputerChoice);

const getHumanChoice = prompt('Choose a weapon: rock, paper, or scissors');
console.log(getHumanChoice);

if (getHumanChoice !== null) {
  gethumanChoice = getHumanChoice.toLowerCase();
  console.log(getHumanChoice); 
} else {
  console.log("Player did not enter a choice of weapon!");
}

let humanScore = 0;
let computerScore = 0;
round = 0;


function playGame () {
  function playround(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
      console.log('It\'s a Tie');
      humanScore += 1;
      computerScore +=1;
    }else if (computerChoice == 'scissors' && humanChoice == 'rock') {
      console.log('You Win!');
      humanScore +=1;
    }else if (computerChoice == 'paper' && humanChoice == 'scissors' ) {
      console.log('You Win!');
      humanScore +=1;
    }else if (computerChoice == 'rock' && humanChoice == 'paper') {
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
    console.log(humanScore);
    
    if (computerScore > humanScore) {
      console.log('Computer is the Champion!')
    }else {
      console.log('You are the Champion!');
    }
  }
}
    


