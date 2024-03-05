const calc = (price = 100) => {
    //ПОЛУЧАЕМ:
    //общий блок
    const calcBlock = document.querySelector('.calc-block')
    //Тип объекта (вып. список)
    const calcType = document.querySelector('.calc-type')
    //Площадь
    const calcSquare = document.querySelector('.calc-square')
    //Количество помещений
    const calcCount = document.querySelector('.calc-count')
    //Срок исполнения (в днях)
    const calcDay = document.querySelector('.calc-day')
    //ИТОГО
    const total = document.getElementById('total')


    // Функция для рассчета итогового значения и вывода в консоль
    const countCalc = () => {
        //Переменная для числа, которое соответствует значению вып. из вып списка
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        //Переменная для ИТОГО
        let totalValue = 0

        let calcCountValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        //Условие на обязательное заполнение полей со * (звездочкой) для выполнения расчетов
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue

        } else {
            totalValue = 0
        }

        total.textContent = totalValue

    }
    calcBlock.addEventListener('input', (e) => {
        // countCalc()
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc()
        }

    })
}
export default calc