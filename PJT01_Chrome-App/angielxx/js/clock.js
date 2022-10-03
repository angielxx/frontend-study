const time = document.querySelector('#clock .time')
const today = document.querySelector('#clock .date')
const AMPM = document.querySelector('#clock .timezone')

const date = new Date()
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"]
const dayArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const month = monthArr[date.getMonth()]
const day = dayArr[date.getDay()]
today.innerText = `${day} ${month} ${date.getDate()} ${date.getFullYear()}`

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  let timezone = ""
  if (hours > 12) { 
    timezone = "PM"
  } else {
    timezone = "AM"
  }
  time.innerText = `${hours}:${minutes}:${seconds}`
  AMPM.innerText = `${timezone}`
}

getClock()
setInterval(getClock, 1000)