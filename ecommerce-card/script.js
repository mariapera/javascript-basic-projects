const imgs = document.querySelectorAll('.img')
const activeImg = document.querySelector('.active-image img')

imgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        document.querySelector('.img.change').classList.remove('change')
        img.classList.add('change')  
activeImg.src=img.firstElementChild.src

    })
})