import './tresRaya.css'

export const initTresRaya = () => {
  const divContent = document.querySelector('.content')
  divContent.innerHTML = ''
  for (let i = 0; i < 9; i++) {
    const button = document.createElement('button')
    button.classList.add('tresraya-button')
    divContent.appendChild(button)
  }
  document
    .querySelectorAll('.tresraya-button')
    .forEach((obj, i) => obj.addEventListener('click', (e) => clicked(e, i)))
}
let turn = 0
const tablero = Array(9).fill(null)
const clicked = (e, pos) => {
  if (tablero[pos]) return
  turn++
  const button = e.target
  const color = turn % 2 ? 'green' : 'red'
  button.style.backgroundColor = color
  tablero[pos] = color
  if (winner()) {
    alert('Great job, you won!' + color)
    resetGame()
  } else if (turn === 9) {
    alert('Tie game')
    resetGame()
  }
}

const winner = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination
    return tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]
  })
}
const resetGame = () => {
  turn = 0
  tablero.fill(null)
  document.querySelectorAll('.tresraya-button').forEach((button) => {
    button.style.backgroundColor = ''
  })
}
