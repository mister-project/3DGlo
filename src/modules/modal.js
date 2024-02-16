const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    console.log(buttons)

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })


}


export default modal