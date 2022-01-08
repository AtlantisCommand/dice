const go = document.querySelector('#go')
const result = document.querySelector('#result')

const startRandom = (ev) => {
  ev.target.timer = setInterval(() => {
    result.textContent = getRandomInt(1, 12, parseInt(result.textContent))
  }, 30)
}
const stopRandom = (ev) => {
  clearInterval(ev.target.timer)
}

//min(包含) ~ max(包含)
const getRandomInt = (min, max, prevNum) => {
  const nextNum = Math.floor(Math.random() * (max - min + 1)) + min
  return nextNum === prevNum ? getRandomInt(min, max, prevNum) : nextNum
}

go.addEventListener('mousedown', startRandom)
go.addEventListener('touchstart', startRandom)

go.addEventListener('mouseup', stopRandom)
go.addEventListener('touchend', stopRandom)