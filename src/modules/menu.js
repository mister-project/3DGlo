const menu = () => {
    const body = document.querySelector('body')
    const menu = body.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')

    //Функция для изменения класса меню на active-menu и обратно
    const handleMenu = () => {

        menu.classList.toggle('active-menu');
    };

    //Функция для деллегирования кликов на все кнопки меню
    const toggleMenu = () => {

        body.addEventListener('click', (e) => {

            menuItems.forEach((menuItem) => {
                if (e.target.closest(".menu") || e.target.classList.contains('close-btn') || e.target.contains(menuItem)) {
                    handleMenu();


                } else if (e.target.closest(".active-menu")) {
                    handleMenu();
                }

            })

        })

    }

    toggleMenu();


}


export default menu