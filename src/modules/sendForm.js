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
            body: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }

        }).then(res => res.json())


    }


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        console.log('submit');

        sendData(formData).then(data => {
            console.log(data);
        })
    })
}
export default sendForm