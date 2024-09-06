const boxes = [...document.querySelectorAll('.box')]

const boxBg = () => {
	boxes.forEach((box, i) => {
		box.style.backgroundImage = `url(images/img-${i + 1}.jpg)`
	})
}

boxBg()

let div
let img
let boolVal = true

boxes.forEach(box => {
	box.addEventListener('mousemove', e => {
		if (boolVal) {
			img = box.firstElementChild
			const top = e.clientY - box.getBoundingClientRect().top
			const left = e.clientX - box.getBoundingClientRect().left
			img.style.top = `${top}px`
			img.style.left = `${left}px`

			const imgPos = img.getBoundingClientRect()
			const divPos = div.getBoundingClientRect()
			const boxPos = box.getBoundingClientRect()

			if (
				imgPos.top - divPos.top < 20 &&
				imgPos.top + 20 > divPos.top &&
				imgPos.left - divPos.left < 20 &&
				imgPos.left + 20 > divPos.left
			) {
				img.style.top = `${divPos.top - boxPos.top}px`
				img.style.left = `${divPos.left - boxPos.left}px`
				img.style.transform = `translate(0,0)`
				img.style.pointerEvents = 'none'
				img.style.border = `0.1rem solid transparent`

				const boxNum = box.classList[1].split('-')[1]

				boxes.forEach(box => {
					box.style.backgroundImage = `url('images/img-${boxNum}.jpg')`
				})
				boolVal = false
			}
		}
	})

	box.addEventListener('mouseenter', () => {
		div = document.createElement('div')
		div.classList.add('box-center')
		div.textContent = 'Extend'
		box.append(div)
	})

	box.addEventListener('mouseleave', () => {
		boxBg()
		if (img) {
			img.style.pointerEvents = 'all'
			img.style.transform = `translate(-50%,-50%)`
			img.style.border = `0.1rem solid #fff`
		}
        boolVal = true

        box.lastElementChild.tagName === 'DIV' && box.removeChild(div)
	})
})
