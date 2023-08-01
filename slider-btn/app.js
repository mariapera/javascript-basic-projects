import cats from './data.js'

const slideContainer = document.querySelector('.slide-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let carouselIndex = 0

slideContainer.innerHTML = cats
	.map((cat, index) => {
		return `<img class="slide-img img" 
		src="${cat.url}" 
		alt="cat" 
		style="left: ${index * 100}%"/>`
	})
	.join('')

prevBtn.disabled = true

const slideImgs = slideContainer.querySelectorAll('.slide-img')

const carousel = () => {
	slideImgs.forEach(img => {
		img.style.transform = `translateX(-${carouselIndex * 100}%)`
	})
}

nextBtn.addEventListener('click', () => {
	carouselIndex++

	if (carouselIndex < cats.length - 1) {
		nextBtn.disabled = false
		prevBtn.disabled = false
	} else {
		nextBtn.disabled = true
	}
	carousel()
})

prevBtn.addEventListener('click', () => {
	carouselIndex--
	if (carouselIndex > 0) {
		nextBtn.disabled = false
		prevBtn.disabled = false
	} else {
		prevBtn.disabled = true
	}
	carousel()
})
