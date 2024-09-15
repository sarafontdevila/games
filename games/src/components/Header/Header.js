import './Header.css'
import { initCrush } from '../../pages/crush/crush.js'
import { initRock } from '../../pages/rock/rock.js'
import { initGame3 } from '../../pages/game3/game3.js'

export const Header = (divApp) => {
  const header = document.createElement('header')
  const buttonCrush = document.createElement('button')
  const buttonRock = document.createElement('button')
  const buttonGame3 = document.createElement('button')

  buttonCrush.textContent = 'Crush'
  buttonRock.textContent = 'Rock'
  buttonGame3.textContent = 'Game3'

  buttonCrush.addEventListener('click', () => {
    initCrush()
  })
  buttonRock.addEventListener('click', () => {
    initRock()
  })
  buttonGame3.addEventListener('click', () => {
    initGame3()
  })

  header.append(buttonCrush)
  header.append(buttonRock)
  header.append(buttonGame3)
  divApp.append(header)
}
