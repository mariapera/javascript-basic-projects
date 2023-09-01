const slideshow = document.querySelector('.slideshow')
const slides = document.querySelector('.slides')
const controler = document.querySelector('.controler')
const amountOfImages = 11

for (let i = 0; i < amountOfImages; i++) {
	const img = document.createElement('img')
	img.setAttribute('src', `images/image-${i + 1}.jpg`)
	img.setAttribute('id', `image-${i + 1}`)
	slides.appendChild(img)

	const a = document.createElement('a')
	a.style.backgroundImage = `url(icons/icon-${i + 1}.jpg)`
	a.setAttribute('href', `#image-${i + 1}`)
	controler.appendChild(a)
}

document.addEventListener('scroll', () => {
    console.log(window.scrollY)
	controler.style.top = `${window.scrollY}px`
})
