const slider = () => {
    //Получаем элементы слайдера
    const sliderBlock = document.querySelector('.portfolio-content')
    //Коллекция слайдов
    const slides = document.querySelectorAll('.portfolio-item')
    //Коллекция точек
    const dots = document.querySelectorAll('.dot')
    console.log(dots);
    //
    
    
    // Задаем начальное значение переменной - счетчика  
    let currentSlide = 0;

    const prevSlide = (elems, index, strClass) => {
        //Удаляем класс активности (видимости) текущего слайда
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        //следующему слайду добавляем класс активности (видимости)
        elems[index].classList.add(strClass)

    }

    const autoSlide = () => {
        //запускаем показ слайдов и передаем параметры для функции
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        //Запускаем счетчик через переменную
        currentSlide++
// Условие остановки счетчика
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
       nextSlide(dots, currentSlide, 'dot-active');
        
    }
//Задаем запуск показа и время интервала
    const startSlide = () => {
        setInterval(autoSlide, 2000)
    }

    const stopSlide = () => {
        
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++

        } else if (e.target.matches('#arrow-left'))  {
            currentSlide--;

        } else if (e.target.classList.contains('dot')) {
            
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })

        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
       nextSlide(dots, currentSlide, 'dot-active');
    })

    startSlide();

}


export default slider