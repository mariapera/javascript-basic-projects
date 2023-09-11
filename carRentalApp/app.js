"use strict"
const carsInfo = async () => {
	await fetch('data.json')
		.then(resp => resp.json())
		.then(result => {
			setupUI(result)
		})
}

const setupUI = cars => {
    
	cars.forEach((car, i) => {
        // car models
        displayCarModels(car, i)
		// car properties
		displayCarProperties(cars,i)
	})
    // change image and properties
    changeImgAndProp(cars)
}

const displayCarModels = (item, index)=> {
    const carModels = document.querySelector('.car-models')
    const button = document.createElement('button')
    button.setAttribute('data-num', index)
    index === 0 && button.setAttribute('class', 'active')
    const buttonText = document.createTextNode(item['mark'])
    button.appendChild(buttonText)
    carModels.appendChild(button)
}

const displayCarProperties = (data, index) => {
    const carProperties = document.querySelector('.car-properties')
    carProperties.innerHTML = ''
    for (const key in data[index]) {
        const div = document.createElement('div')
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')
        const span1Text = document.createTextNode(`${key}`)
        const span2Text = document.createTextNode(`${data[index][key]}`)
        span1.appendChild(span1Text)
        span2.appendChild(span2Text)
        div.appendChild(span1)
        div.appendChild(span2)
        carProperties.appendChild(div)
    }
}

const changeImgAndProp = (data) => {
	const btns = document.querySelectorAll('.car-models button')
	const carImage = document.querySelector('.car-images img')
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			const activeBtn = document.querySelector('.car-models button.active')
			activeBtn.classList.remove('active')
			btn.classList.add('active')
			const buttonNum = Number(btn.dataset.num)
			carImage.src = `images/car-${buttonNum + 1}.png`
            displayCarProperties(data,buttonNum)
		})
	})
}

carsInfo()
