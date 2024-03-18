const sendForm = (idForm) => {
    console.dir(idForm)
    const form = document.getElementById(idForm)

    let user = {
        name: 'Alex',
        age: 24
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
        e.preventDefault()

        const formData = new FormData(form)
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val

        })
        console.log('submit');

        sendData(formBody).then(data => {
            

            console.log(data);
        })
    })
}
export default sendForm