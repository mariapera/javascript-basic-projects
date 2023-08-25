import { months, days } from './data.js'

const toggleBtn = document.querySelector('.toggle-btn')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

toggleBtn.addEventListener('click', e => {
	const html = document.querySelector('html')
	if (html.classList.contains('dark')) {
		html.classList.remove('dark')
		e.target.innerText = 'Dark mode'
	} else {
		html.classList.add('dark')
		e.target.innerText = 'Light mode'
	}
})

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

const setTime = () => {
	const time = new Date()
	const hours = time.getHours()
	const hoursForClock = hours % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()
	const ampm = hours < 12 ? 'AM' : 'PM'

	const month = time.getMonth()
	const date = time.getDate()
	const day = time.getDay()

	// hourEl.style.transform = `translateX(-50%) rotate(${scale(
	// 	hoursForClock,
	// 	0,
	// 	11,
	// 	0,
	// 	359
	// )}deg)`
	// minuteEl.style.transform = `translateX(-50%) rotate(${scale(
	// 	minutes,
	// 	0,
	// 	59,
	// 	0,
	// 	359
	// )}deg)`
	// secondEl.style.transform = `translateX(-50%) rotate(${scale(
	// 	seconds,
	// 	0,
	// 	59,
	// 	0,
	// 	359
	// )}deg)`

	timeEl.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} <span class="ampm">${ampm}</span>`

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="day">${date}</span>`
}

setTime()
setInterval(setTime, 1000)

// ****************************************

function setClock() {
	const currentTime = new Date()
	const secondsRatio = currentTime.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentTime.getHours()) / 12
	
	setRotation(secondEl, secondsRatio)
	setRotation(minuteEl, minutesRatio)
	setRotation(hourEl, hoursRatio)
}

function setRotation(element, ratio) {
	element.style.setProperty('--rotation', ratio * 360)
}

setClock()
setInterval(setClock,1000)