const go = document.querySelector('#go')
const result = document.querySelector('#result')
let isMouseUp = false

const startRandom = async () => {
  isMouseUp = false
  while (true) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        result.textContent = getRandomInt(1, 12, parseInt(result.textContent))
        resolve()
      }, 30);
    })
    await p
    if (isMouseUp) break
  }
}
const stopRandom = () => {
  isMouseUp = true
}
//min(包含) ~ max(包含)
function getRandomInt(min, max, prevNum) {
  const nextNum = Math.floor(Math.random() * (max - min + 1)) + min
  return nextNum === prevNum ? getRandomInt(min, max, prevNum) : nextNum
}

go.addEventListener('mousedown', startRandom)
go.addEventListener('touchstart', startRandom)

go.addEventListener('mouseup', stopRandom)
go.addEventListener('touchend', stopRandom)


