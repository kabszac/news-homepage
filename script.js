const navButton = document.querySelector(".open")
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')

navButton.addEventListener('click', () => {
    modal.classList.add('active')
    overlay.classList.add('active')

})


closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
})