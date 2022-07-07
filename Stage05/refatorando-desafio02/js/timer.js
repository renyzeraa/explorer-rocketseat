const minutesHtml = document.querySelector('.minutes')
const secondsHtml = document.querySelector('.seconds')
let minutes = +minutesHtml.textContent
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesHtml.textContent = String(minutes).padStart(2, '0')
  secondsHtml.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let minutes = +minutesHtml.textContent
    let seconds = +secondsHtml.textContent

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
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
