// Hi, I'm a comment. When you run this file I will be completely ignored.
// Comments help others and, more importantly, yourself make sense of your code.

// your JavaScript code goes here!

const wantToPlay = confirm("Do you want to play the game");
let computerChoice = Math.floor(Math.random() * 4);


if(wantToPlay) {
  let playerChoice = prompt('What would you like to be?');
  playerChoice = playerChoice.toLowerCase();

  // if(playerChoice === 'paper') {
  //   console.log('You Win!')
  // } else if (playerChoice === 'rock') {
  //   console.log('Draw!')
  // } else if  (playerChoice === 'scissors') {
  //   console.log('You Lose!')
  // } else {
  //   console.log('Put that down!')
  // }

//   if(computerChoice === playerChoice) {
//     console.log('Draw!')
//   } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
//     console.log('You Lose!')
//   } else if  (computerChoice === 'paper' && playerChoice === 'rock') {
//     console.log('You Lose!')
//   } else if  (computerChoice === 'scissors' && playerChoice === 'paper') {
//     console.log('You Lose!')
//   } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
//     console.log('You Win!')
//   } else if (computerChoice === 'rock' && playerChoice === 'paper') {
//     console.log('You Win!')
//   } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
//     console.log('You Win!')
//   }
//    else {
//     console.log('Put that down!')
//   }
// } else {
//   console.log('oh, I really had my hopes up')
// }

// Solution

const wantToPlay = confirm("Do you want to play the game");

if(wantToPlay) {
  let playerChoice = prompt('What would you like to be?');
  playerChoice = playerChoice.toLowerCase();
  let computerChoice = 'rock'

  const randomNumber = Math.random();
  if(randomNumber <= 1/3) {
    computerChoice = 'paper'
  } else if (randomNumber <= 2/3) {
    computerChoice = 'scissors'
  }
  console.log('the computer chose: ', computerChoice, 'you chose: ', playerChoice)

  if(playerChoice === computerChoice) {
    console.log('Draw!')
  }

  if(playerChoice !== 'paper' && playerChoice !== 'rock' && playerChoice !== 'scissors') {
    console.log('Put that down!')
  }

  if(computerChoice === 'rock') {
    if(playerChoice === 'paper') {
      console.log('You Win!')
    } else if (playerChoice === 'rock') {
      console.log('Draw!')
    } else if (playerChoice === 'scissors') {
      console.log('You Lose!')
    } else if (computerChoice === 'paper') {
      if(playerChoice === 'sissors') {
        console.log('You Win!')
    } else if (playerChoice === 'rock') {
      console.log('You Lose!')
    } else if  (computerChoice === 'scissors') {
      if (playerChoice === 'rock') {
        console.log('You Win!')
    } else if (playerChoice === 'paper') {
      console.log('You Lose!')
    }
  } else {
  console.log('oh, I really had my hopes up')
}

