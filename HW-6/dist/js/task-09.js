import { getRandomHexColor } from './getRandomHexColor.js'
var bodyEl = document.querySelector('body')
var spanEl = document.querySelector('.color')
var buttonEl = document.querySelector('.change-color')
buttonEl === null || buttonEl === void 0
	? void 0
	: buttonEl.addEventListener('click', handlerClick)
function handlerClick() {
	var randomColor = getRandomHexColor()
	if (bodyEl && spanEl) {
		bodyEl.style.background = randomColor
		spanEl.textContent = randomColor
	}
}
