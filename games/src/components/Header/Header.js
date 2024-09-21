import './Header.css'
import { initCrush } from '../../pages/crush/crush.js'
import { initRock } from '../../pages/rock/rock.js'
import { initTresRaya } from '../../pages/tresRaya/tresRaya.js'

export const Header = (divApp) => {
  const header = document.createElement('header')
  const buttonCrush = document.createElement('button')
  const buttonRock = document.createElement('button')
  const buttonTresRaya = document.createElement('button')

  buttonCrush.textContent = 'Crush'
  buttonRock.textContent = 'Rock'
  buttonTresRaya.textContent = 'TresRaya'

  buttonCrush.addEventListener('click', () => {
    initCrush()
  })
  buttonRock.addEventListener('click', () => {
    initRock()
  })
  buttonTresRaya.addEventListener('click', () => {
    initTresRaya()
  })

  header.append(buttonCrush)
  header.append(buttonRock)
  header.append(buttonTresRaya)
  divApp.append(header)
}
