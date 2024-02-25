const tabs = () => {
    const tabPanel = document.querySelector('.service-header')
    const tabs = document.querySelectorAll('.service-header-tab')
    const tabContent = document.querySelectorAll('.service-tab')
    tabPanel, addEventListener('click', (e) => {
        console.log(e.target.closest('.service-header-tab'))

        if (e.target.classList.contains('service-header-tab')) {
            tabs.forEach((tab, index) => {
                if (tab === e.target) {
                    tab.classList.add('active')
                } else {
                    tab.classList.remove('active')
                }

            })
        }
    })


}
export default tabs