

// Toggle Mobile Menu
const menuBtn = document.querySelector('.nav_bar')
const nav = document.querySelector('.head-left')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav_active')
    
    if(menuBtn.classList.contains('fa-bars')) {
        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-xmark')
    }else{
        menuBtn.classList.add('fa-bars')
        menuBtn.classList.remove('fa-xmark')
    }
})