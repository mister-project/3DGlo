import {
    animate
} from "./helpers"

const modalk = () => {
    console.log('modal-k')
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block'
            if (window.innerWidth > 768) {
                animate({
                    duration: 2000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {

                        modal.style.opacity = progress
                    }
                })
            }
        })
        modal.addEventListener('click', (e) => {
            e.preventDefault()
            //метод 'closest' отправляет значение наверх по верстке и позволяет получить значение 'null при клике мимо окна
            // console.log(e.target.closest('.popup-content'))// получаем null при клике мимо окна;
            //закрываем модальное окно при значении null \отсутсвие popup-content снаружи\ (метод 'closest') или наличии внутри (метод 'contains') события "popup-close" - (нажатие на кнопку X). меняем style.display = 'none'. Счетчик count обнуляем для возобновления анимации, (если после закрытия окна снова будет нажатие на кнопку "Оставить заявку")
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {

                modal.style.display = 'none'
            }
        })


    });



}

export default modalk