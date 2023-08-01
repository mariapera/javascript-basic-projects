import dogs from './data.js'

const sliderContainer = document.querySelector('.slider-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const carouselSpeed = 7000
let slideIndex = 0

sliderContainer.innerHTML = dogs
	.map((dog, index) => {
		return `<img class="slide-img img" 
		src="${dog.url}" 
		alt="cat" 
		style="left: ${index * 100}%"/>`
	})
	.join('')

const slideImgs = sliderContainer.querySelectorAll('.slide-img')

const changeImg = () => {
	if (slideIndex > dogs.length - 1) {
		slideIndex = 0
	} else if (slideIndex < 0) {
		slideIndex = dogs.length - 1
	}

	slideImgs.forEach(img => {
		img.style.transform = `translateX(-${slideIndex * 100}%)`
	})
}

const carouselHandle = () => {
	slideIndex++
	changeImg()
}

let startCarousel = setInterval(carouselHandle, carouselSpeed)

const resetInterval = () => {
	clearInterval(startCarousel)
	changeImg()
	startCarousel = setInterval(carouselHandle, carouselSpeed)
}

nextBtn.addEventListener('click', () => {
	slideIndex++
	resetInterval()
})

prevBtn.addEventListener('click', () => {
	slideIndex--
	resetInterval()
})
