const sendForm = (idForm) => {
    console.dir(idForm)
    const form = document.getElementById(idForm.id)

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data

        }).then(res => res.json())


    }


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('submit');

        sendData({}).then()
    })
}
export default sendForm