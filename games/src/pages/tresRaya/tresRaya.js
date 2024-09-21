import './tresRaya.css'

export const initTresRaya = () => {
  const divContent = document.querySelector('.content')
  divContent.innerHTML = ''
  divContent.innerHTML = /*'<h1>rock</h1>'*/ '<button></button>'
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  ;('<button></button>')
  document
    .querySelectorAll('button')
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
  /*if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
    return true
  } else if (
    tablero[3] == tablero[4] &&
    tablero[3] == tablero[5] &&
    tablero[3]
  ) {
    return true
  } else if (
    tablero[6] == tablero[7] &&
    tablero[6] == tablero[8] &&
    tablero[6]
  ) {
    return true
  } else if (
    tablero[0] == tablero[3] &&
    tablero[0] == tablero[6] &&
    tablero[0]
  ) {
    return true
  } else if (
    tablero[1] == tablero[4] &&
    tablero[1] == tablero[7] &&
    tablero[1]
  ) {
    return true
  } else if (
    tablero[2] == tablero[5] &&
    tablero[2] == tablero[8] &&
    tablero[2]
  ) {
    return true
  } else if (
    tablero[0] == tablero[4] &&
    tablero[0] == tablero[8] &&
    tablero[0]
  ) {
    return true
  } else if (
    tablero[2] == tablero[4] &&
    tablero[2] == tablero[6] &&
    tablero[2]
  ) {
    return true
  } else return false*/
}

/*document
  .querySelectorAll('button')
  .forEach((obj, i) => obj.addEventListener('click', (e) => clicked(e, i)))*/
const resetGame = () => {
  turn = 0
  tablero.fill(null)
  document.querySelectorAll('button').forEach((button) => {
    button.style.backgroundColor = ''
  })
}
