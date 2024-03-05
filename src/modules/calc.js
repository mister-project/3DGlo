const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.querySelector('total')

    // Функция для рассчета итогового значения и вывода в консоль
    const countCalc = () => {
        console.log('calc');

    }
    calcBlock.addEventListener('input', (e) => {
        countCalc()
    })
}
export default calc