const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const milSec = now.getMilliseconds()
    const timeInterval = 6

    secondsHand.style.transform = 'rotate(60deg)'
    // console.log(now, "I'm Here!")
    // console.log(seconds, "I'm Here!")
    // console.log(minutes, "I'm Here!")
    // console.log(hours, "I'm Here!")
    // console.log(milSec, "I'm Here!")
}
getTime() 