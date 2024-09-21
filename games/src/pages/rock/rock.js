import './rock.css'

const options = ['rock', 'paper', 'scissors']
export const initRock = () => {
  const divContent = document.querySelector('.content')
  divContent.innerHTML = ''
  divContent.innerHTML =
    '<div id="options" class="game-container">' +
    '<div id="options" class="choices">' +
    '<button onclick="playGame(\'rock\')"> ROCK</button>' +
    '<button onclick="playGame(\'paper\')"> PAPER</button>' +
    '<button onclick="playGame(\'scissors\')"> SCISSORS</button>' +
    '</div>' +
    '<div id="player">PLAYER: </div>' +
    '<div id="computer">COMPUTER: </div>' +
    '<div id="result">RESULT: </div>' +
    '</div>'
}
window.playGame = function (playerInput) {
  const computerOption = options[Math.floor(Math.random() * 3)]
  let output = ''
  const player = document.getElementById('player')
  const computer = document.getElementById('computer')
  const result = document.getElementById('result')
  if (playerInput === computerOption) {
    output = 'DRAW'
  } else if (
    (playerInput === 'rock' && computerOption === 'scissors') ||
    (playerInput === 'paper' && computerOption === 'rock') ||
    (playerInput === 'scissors' && computerOption === 'paper')
  ) {
    output = 'YOU WIN'
  } else {
    output = 'YOU LOSE'
  }
  player.innerHTML = 'PLAYER: ' + playerInput
  computer.innerHTML = 'COMPUTER: ' + computerOption
  result.innerHTML = 'RESULT: ' + output
}
