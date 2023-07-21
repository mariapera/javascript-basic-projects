const displayButtons = (container, pages, activeIndex) => {
	const buttonsList = pages.map((_, pageIndex) => {
		return `<button class="btn page-btn ${
			pageIndex === activeIndex ? 'active-btn' : null
		}" data-index="${pageIndex}">${pageIndex + 1}</button>`
	})

	buttonsList.unshift(`<button class="btn prev-btn">Prev</button>`)
	buttonsList.push(`<button class="btn next-btn">Next</button>`)
	container.innerHTML = buttonsList.join('')
}

export default displayButtons
