// const elhamburger = document.querySelector ('.hamburger-btn')
// const elheader = document.querySelector ('.headar')

// elhamburger.addEventListener('clicki', function (){
//     elheader.classList.toggle('header--adaptive')
// })
const elHumberger = document.querySelector('.hamburger-btn')
const elHeader = document.querySelector('.headar')

elHumberger.addEventListener('click', function () {
	elHeader.classList.toggle('header--adaptive')
})