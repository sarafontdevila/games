import './style.css'
import { Header } from './src/components/Header/Header.js'
import { initCrush } from './src/pages/crush/crush.js'

const divApp = document.querySelector('#app')
Header(divApp)
const divContent = document.createElement('div')
divContent.className = 'content'

divApp.append(divContent)
initCrush()
