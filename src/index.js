import timer from './modules/timer'
import menu from './modules/menu'
// import modal from './modules/modal'
import modalk from './modules/modalk'
import validator from './modules/validator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
console.log('index.js');
timer('28 february 2025');
menu();
// modal();
modalk()
validator()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
            type: 'block',
            id: 'total'
        }

    ]
})
sendForm({
    formId: 'form2',
    someElem: [{
            type: 'block',
            id: 'total'

        },
        {
            type: 'block',
            id: "form2-message"
        }
    ]

})
sendForm({
    formId: 'form3',
    someElem: [{
            type: 'block',
            id: 'total'
        }

    ]
})