// script is at the bottom of the HTML
// No DOMcontentloaded needed.

  const happybirthday = document.querySelector('#happybirthday')
  const countdownContainer = document.querySelector('#countdown')
  const daysCnt = document.querySelector('#days')
  const hoursCnt = document.querySelector('#hours')
  const minutesCnt = document.querySelector('#minutes')
  const secondsCnt = document.querySelector('#seconds')

  const currentTime = new Date()

  let currentYear = currentTime.getFullYear()
  let eventDate = new Date( currentYear, 1, 11)
  const feb11th = currentTime.getMonth() === 1 && currentTime.getDate() === 11

  const countdown = () => {
    const now = new Date()

    if (now > eventDate) {
      eventDate = new Date( currentYear + 1, 1, 11)
    } else if (now.getFullYear() === eventDate.getFullYear() + 1) {
      eventDate = new Date(now.getFullYear(), 1, 11)
    }

    const currentTime = now.getTime()
    const eventTime = eventDate.getTime()
    const remaningTime = eventTime - currentTime

    let seconds = Math.floor(remaningTime / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)
    // debugger
    hours %= 24
    minutes %= 60
    seconds %= 60

    if (feb11th) {
      console.log('Happy Birthday Mom!')
      countdownContainer.style.display = 'none'
      happybirthday.style.display = 'block'

    } else {
      daysCnt.textContent = days
      hoursCnt.textContent = hours
      minutesCnt.textContent = minutes
      secondsCnt.textContent = seconds
      setTimeout(countdown, 1000)
    } // end of if (feb11th)
  } // end of function
  countdown()
