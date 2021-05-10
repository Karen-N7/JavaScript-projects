function scrollAppear() {
    var text = document.querySelector('.text')
    var imgs = document.querySelectorAll('img')
    var position = text.getBoundingClientRect().top
    var screenPosition = window.innerHeight / 1.1
    if (position < screenPosition) {
        text.classList.add('active')
        imgs.forEach(img => {
            img.classList.add('imgFloat')
        })
    } else {
        text.classList.remove('active')
        imgs.forEach(img => {
            img.classList.remove('imgFloat')
        })
    }
}
window.addEventListener('scroll', scrollAppear)
