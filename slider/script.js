import people from './data.js'

const container = document.querySelector('.slide-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const slider = () => {
	container.innerHTML = people
		.map((person, slideIndex) => {
			const { img, name, job, info } = person
			let position = 'next'
			if (slideIndex === 0) {
				position = 'active'
			}
			if (slideIndex === people.length - 1) {
				position = 'last'
			}
			return `<article class="slide ${position}">
            <img class="img" src="${img}">
            <h4 class="name">${name}</h4>
            <h4 class="job">${job}</h4>
            <p class="info">${info}</p>
            <div class="quote-icon"><i class="fa-solid fa-quote-right"></i></div>
        </article>`
		})
		.join(' ')
}

slider()

const startSlider = type => {
	const active = document.querySelector('.active')
	let next = active.nextElementSibling
	const last = document.querySelector('.last')

	if (!next) {
		next = container.firstElementChild
	}

	active.classList.remove('active')
	last.classList.remove('last')

    if(type === 'prev') {
        next = last.previousElementSibling
        if(!next) {
            next = container.lastElementChild
        }
        next.classList.remove('next')
	    next.classList.add('last')
        last.classList.add('active')
        active.classList.add('next')
        return
    }

	next.classList.remove('next')

	active.classList.add('last')
	next.classList.add('active')
	last.classList.add('next')
}

nextBtn.addEventListener('click', () => {
	startSlider()
})
prevBtn.addEventListener('click', () => {
	startSlider('prev')
})
