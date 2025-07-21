import './Header.css'
import '../GameButton/GameButton.css'
import {
  initCrush,
  stopGame as stopCrushGame
} from '../../pages/crush/crush.js'
import { initRock } from '../../pages/rock/rock.js'
import { initTresRaya } from '../../pages/tresRaya/tresRaya.js'
import { gameButton } from '../GameButton/GameButton.js'

const stopAllGames = () => {
  stopCrushGame()
}

export const Header = (divApp) => {
  const header = document.createElement('header')

  const games = [
    { text: 'Crush', action: initCrush },
    { text: 'Rock', action: initRock },
    { text: 'TresRaya', action: initTresRaya }
  ]

  games.forEach(({ text, action }) => {
    const button = gameButton({
      text,
      className: 'gameButton',
      onClick: () => {
        stopAllGames()
        action()
      }
    })
    header.appendChild(button)
  })

  divApp.appendChild(header)
}


