const controlerBtns = document.querySelectorAll('.link-controller')
const video = document.querySelector('.tv-video')

controlerBtns.forEach((btn, index) => {
    btn.addEventListener('click', e => {
        e.preventDefault()
        video.setAttribute('src', `./videos/video-${index + 1}.mp4`)
    })
})