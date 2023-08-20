const photo = document.querySelector('.photo')

const zoomImg = (e) => {
	const y = e.clientY
    const imgY = photo.offsetTop
    const cordY = y - imgY

    const x = e.clientX
    const imgX = photo.offsetLeft
    const cordX = x - imgX

    photo.style.transformOrigin = `${cordX}px ${cordY}px`
	photo.classList.add('zoom-img')
}

const resetImg = () => {
	photo.classList.remove('zoom-img')
}

photo.addEventListener('mousemove', zoomImg)
photo.addEventListener('mouseout', resetImg)
