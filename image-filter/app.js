const navLinks = document.querySelectorAll('.nav-link')
const imagesContainer = document.querySelector('.images-container')

const carTypes = [
	['bmw', 8],
	['porsche', 9],
	['mercedes', 7],
	['sport', 5],
]

carTypes.forEach(type => {
	for (let i = 0; i < type[1]; i++) {
		const img = document.createElement('img')
		img.setAttribute('src', `images/${type[0]}-${i + 1}.jpg`)
		img.setAttribute('data-type', `${type[0]}`)
		img.setAttribute('alt', `${type[0]}`)
		imagesContainer.appendChild(img)
	}
})

navLinks.forEach(navLink => {
	navLink.addEventListener('click', () => {
		document.querySelector('.nav-link.active').classList.remove('active')
		navLink.classList.add('active')
		const navType = navLink.dataset.type
	
        const images = document.querySelectorAll('.images-container img')
		images.forEach(img => {
			img.classList.add('hide')
            const imgType = img.dataset.type

			if (imgType === navType) {
				img.classList.remove('hide')
			} else if (navType === 'all') {
				img.classList.remove('hide')
			}
		})
	})
})
