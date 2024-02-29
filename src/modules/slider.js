const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides= document.querySelectorAll('.portfolio-item')
    
    
    // Задаем начальное значение переменной - счетчика  
    let currentSlide = 0;

    const prevslide = (elems, index, strClass) => {
        //Удаляем класс активности (видимости) текущего слайда
        slides[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        //следующему слайду добавляем класс активности (видимости)
        slides[index].classList.add(strClass)

    }

    const autoSlide = () => {
        //запускаем показ слайдов и передаем параметры для функции
        prevslide(slides, currentSlide, 'portfolio-item-active');
        //Запускаем счетчик через переменную
        currentSlide++
// Условие остановки счетчика
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        
    }
//Задаем запуск показа и время интервала
    const startSlide = () => {
        setInterval(autoSlide, 2000)
    }

    const stopSlide = () => {
        
    }

    startSlide();

}


export default slider