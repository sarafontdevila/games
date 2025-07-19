

export function gameButton({ text, className = '', onClick }) {
  const button = document.createElement('button')
  button.textContent = text
  button.className = className
  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick)
  }
  return button
}