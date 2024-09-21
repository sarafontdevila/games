import './style.css'
import { Header } from './src/components/Header/Header.js'
import { initCrush } from './src/pages/crush/crush.js'
import { initTresRaya } from './src/pages/tresRaya/tresRaya.js'

const divApp = document.querySelector('#app')
Header(divApp)
const divContent = document.createElement('div')
divContent.className = 'content'

divApp.append(divContent)
initCrush()
