const button = document.querySelectorAll ('.button button')
const title = document.querySelectorAll ('.title h4')
const input = document.querySelectorAll ('.input div')

button.forEach (buttonLeft => {
    buttonLeft.onclick = function() {
        button.forEach (item => {
            item.classList.remove ('active')
        })
        this.classList.add ('active')
        title.forEach (voucher => {
            voucher.classList.toggle ('d-none')
        })
        input.forEach (member => {
            member.classList.toggle ('d-none')
        })
    }
})