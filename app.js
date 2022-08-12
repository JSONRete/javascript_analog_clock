const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('seconds-hand')
const hoursHand = document.getElementById('seconds-hand')

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const milSec = now.getMilliseconds()
    console.log(now, "I'm Here!")
    console.log(seconds, "I'm Here!")
    console.log(minutes, "I'm Here!")
    console.log(hours, "I'm Here!")
    console.log(milSec, "I'm Here!")
}
getTime() 