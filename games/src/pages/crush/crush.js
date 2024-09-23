import './crush.css'
let Count = 0
let stopped = true
let rangevalid = null

const savedCount = localStorage.getItem('crushScore')
if (savedCount !== null) {
  Count = parseInt(savedCount, 10)
}
export const initCrush = () => {
  const divContent = document.querySelector('.content')

  divContent.innerHTML = ''

  const carrito = document.createElement('img')
  const textConta = document.createElement('h2')
  const play = document.createElement('button')
  const stop = document.createElement('button')
  const audio = document.createElement('audio')

  audio.src = './assets/crush/catch.mp3'
  textConta.textContent = Count
  textConta.className = 'contador'
  carrito.className = 'carrito'
  carrito.src = './assets/crush/carrito.png'
  play.textContent = 'Play'
  stop.textContent = 'Stop'
  play.className = 'crushButton'
  stop.className = 'crushButton'

  play.addEventListener('click', () => {
    stopped = false
    toggleButton(play, stop)
    startGame()
  })
  stop.addEventListener('click', () => {
    stopped = true
    toggleButton(play, stop)
    stopGame()
  })
  toggleButton(play, stop)

  divContent.append(audio)
  divContent.append(play)
  divContent.append(stop)
  divContent.append(textConta)
  divContent.append(carrito)

  createPumpkin()
}

const createPumpkin = () => {
  const divContent = document.querySelector('.content')
  let randomLeft = Math.random() * (window.innerWidth - 100)
  let randomTop = Math.random() * (window.innerHeight - 100)

  const imgPumpkin = document.createElement('img')
  imgPumpkin.className = 'pumpkin catch'
  imgPumpkin.style.top = `${randomTop}px`
  imgPumpkin.style.left = `${randomLeft}px`
  imgPumpkin.classList.add('catch')
  imgPumpkin.src = './assets/crush/pumpkin.png'

  imgPumpkin.addEventListener('click', (event) => {
    if (!stopped) {
      catchPumpkin(event)
    }
  })

  divContent.append(imgPumpkin)
}
const catchPumpkin = (event) => {
  const audio = document.querySelector('audio')
  audio.play()
  Count++
  updateContador(Count)
  localStorage.setItem('crushScore', Count)

  const carrito = document.querySelector('.carrito')
  const pumpkin = event.target

  pumpkin.style.top = `${carrito.offsetTop}px`
  pumpkin.style.left = `${carrito.offsetLeft}px`
}
const updateContador = (cont) => {
  const textConta = document.querySelector('.contador')
  textConta.textContent = cont
}

const startGame = () => {
  if (!rangevalid) {
    rangevalid = setInterval(() => {
      createPumpkin()
    }, 1500)
    /*setTimeout(() => {
      stopGame()
      alert('Game is over!')
    }, 20000)*/
  }
}

export const stopGame = () => {
  if (rangevalid) {
    clearInterval(rangevalid)
    rangevalid = null
  }
  stopped = true
}

const toggleButton = (play, stop) => {
  if (stopped) {
    play.classList.add('show')
    stop.classList.remove('show')
  } else {
    stop.classList.add('show')
    play.classList.remove('show')
  }
}
