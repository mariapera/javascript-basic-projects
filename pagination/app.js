import { getElement } from './utils.js'

import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const btnsContainer = getElement('.buttons-container')

let activeIndex = 0
let pages = []

const setupUI = () => {
	displayFollowers(pages[activeIndex])
	displayButtons(btnsContainer, pages, activeIndex)
}

const init = async () => {
	const followers = await fetchFollowers()
	pages = paginate(followers)
	setupUI()
}

window.addEventListener('load', init)

btnsContainer.addEventListener('click', e => {
	if (e.target.classList.contains('buttons-container')) return

	if (e.target.classList.contains('prev-btn')) {
		activeIndex--
		if (activeIndex < 0) {
			activeIndex = pages.length - 1
		}
	}

	if (e.target.classList.contains('next-btn')) {
		activeIndex++
		if (activeIndex > pages.length - 1) {
			activeIndex = 0
		}
	}

	if (e.target.classList.contains('page-btn')) {
		activeIndex = parseInt(e.target.dataset.index)
	}
	setupUI()
})
