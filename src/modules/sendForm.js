const sendForm = ({ formId, someElem = [] }) => {
    // console.dir(idForm)
    const form = document.getElementById(formId)
//Функция для валидации полей
    const validate = (list) => {
        console.log(list)
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault() //отменяем действие браузера по умолчанию при нажатии на кнопку
//Получаем NodeList из полей ***для валидации***
        const formElements = form.querySelectorAll('input');

//получаем сразу все поля из формы
        const formData = new FormData(form)
        const formBody = {} //сюда будем собирать инфу из формы и калькулятора

//перебираем и формируем заново получившиеся поля из формы
        formData.forEach((val, key) => {
            formBody[key] = val

        })
//вывод и отправка значения "Калькулятора"
        someElem.forEach(elem => {
        const element = document.getElementById(elem.id)

        console.log(element)
         
         if(elem.type === 'block') {
         formBody[elem.id] = element.textContent         
         }else if (elem.type === 'input') {
         formBody[elem.id] = element.value
         
         }

        })
        console.log('submit');
        
        validate(formElements)

        sendData(formBody).then(data => {            

            console.log(data);
        })
    })
}
export default sendForm