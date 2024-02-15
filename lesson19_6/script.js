console.log('script')
let date = new Date(); // переменная с текущим временем
let myHours = date.getHours(), //переменная с часами для определения времени суток (день, ночь, вечер)

    //Определяем и выводим время суток

    elements = document.getElementById('time'),

    name = elements.innerHTML;

switch (true) {
    case (myHours >= 5) && (myHours < 11):
        elements.innerHTML = 'Доброе утро, ';
        brmyHourseak;
    case (myHours >= 11) && (myHours < 16):
        elements.innerHTML = 'Добрый день, ';
        break;
    case (myHours >= 16) && (myHours <= 23):
        elements.innerHTML = 'Добрый вечер, ';
        break;
    case (myHours >= 0) && (myHours < 5):
        elements.innerHTML = 'Доброй ночи, ';
        break;
    default:
        elements.innerHTML = 'Здравствуйте, ';
        break;


}
//Определяем и выводим день недели
let today = document.getElementById('today');
today.innerHTML = 'Сегодня: ' + date.toLocaleString('ru', {
    weekday: 'long'
})
//определение и вывод времени в формате AM/PM
let nowAmPm = document.getElementById('nowAmPm');
nowAmPm.innerHTML = 'Текущее время: ' + date.toLocaleTimeString("en"); // 9:17:25 PM
console.log(myHours)
console.log(elements.innerHTML)


//Считаем дни до нового года

let deadline = '01 january 2025 00:00'

const getTimeRemaining = () => {

    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000


    let days = Math.floor(timeRemaining / 60 / 60 / 24)

    console.log(days)
    timeRemNeyYear = document.getElementById('timeRemNeyYear'),
        timeRemNeyYear.innerHTML = `До нового года осталось: ${days} дней`


}
getTimeRemaining()