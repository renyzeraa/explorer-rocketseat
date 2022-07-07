import { minutesHtml, secondsHtml } from './elements.js'
import { kitchenTimerAudio } from './sounds.js'
let minutes = +minutesHtml.textContent
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesHtml.textContent = String(minutes).padStart(2, '0')
  secondsHtml.textContent = String(seconds).padStart(2, '0')
}

function pauseTimer() {
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let minutes = +minutesHtml.textContent
    let seconds = +secondsHtml.textContent
    let isFinished = minutes <= 0 && seconds <= 0
    updateTimerDisplay(minutes, 0)

    if (isFinished) {
      resetTimer()
      kitchenTimerAudio.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function lessTimer() {
  let minutes = +minutesHtml.textContent
  let seconds = +secondsHtml.textContent

  if (minutes > 5) {
    updateTimerDisplay(minutes - 5, seconds)
  } else {
    updateTimerDisplay(minutes, seconds)
  }
}

function mostTimer() {
  let minutes = +minutesHtml.textContent
  let seconds = +secondsHtml.textContent

  if (minutes < 56) {
    updateTimerDisplay(minutes + 5, seconds)
  } else {
    updateTimerDisplay(minutes, seconds)
  }
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

export {
  updateTimerDisplay,
  resetTimer,
  countdown,
  pauseTimer,
  lessTimer,
  mostTimer
}
