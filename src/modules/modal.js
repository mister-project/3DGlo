const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    console.log(buttons)
    let count = 0; //переменная для счетчика в цикле анимациии

    let idInterval //переменная для запуска и остановки анимации

    //Функция-цикл для организации постепенного изменения параметра прозрачности "style.opacity" от 0 до 1 с шагом 0.01 (100 циклов)
    const popupAnimate = () => {

        count++
        idInterval = requestAnimationFrame(popupAnimate)
        if (count < 100) {
            modal.style.opacity = count * 0.01

        } else {
            cancelAnimationFrame(idInterval)
        }

    }
    // Перебор кнопок с изменением style.display с none на block + активация функции анимации
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block', popupAnimate()
        })
    })
    // Навешиваем события на кнопку Х(закрытие окна) - меняем style.display = 'none'. Счетчик count обнуляем для повторения анимации, если после закрытия окна снова нажмут на кнопку btn
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none', count = 0
    })


}


export default modal