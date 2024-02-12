const oneModule = () => {
    const one = 'one1.js'
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const countTimer = (deadline) => {

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        timerHours.textContent = hours
        timerMinutes.textContent = minutes
        timerSeconds.textContent = seconds
    }
    // countTimer('16 february 2024')
    setInterval(countTimer, 1000, '16 february 2024')
}
export default oneModule