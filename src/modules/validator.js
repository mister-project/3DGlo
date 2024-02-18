const validator = () => {
    //Выделение полей в разделе "Расчитать стоимость"
    const items = document.querySelectorAll('.calc-item')
    // console.log(items)
    let index;
    //Отсекаем из Nodelist'a items поле "Интерьер квартиры" с индектом =0 и перебираем только 3 оставшихся поля, поочередно закладывая их в переменную itemCalc
    for (index = 1; index < items.length; ++index) {
        let itemCalc = items[index];
        // console.log(itemCalc);
        //Устанавливаем разрешение на ввод в поля только цифр
        itemCalc.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/g, "")
        })



    }




    //Только КИРИЛИЦА -Валидация поля имени в форме вначале, внизу и модальном окне 
    const userName = document.querySelectorAll('[name="user_name"]');
    console.log(userName);
    userName.forEach(element => {

        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "")
        })
    });


    const email = document.querySelectorAll('input[type="email"]')
    console.log(email);
    email.forEach(el => {
        console.log(el)
        el.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/g, "");
        })
    });
    const tel = document.querySelectorAll('input[type="tel"]')
    console.log(tel);


    //Только КИРИЛЛИЦА - валидация поля "Ваше сообщение в конце страницы"
    const place = document.querySelector('[placeholder="Ваше сообщение"]')
    place.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "")
    })
}
export default validator