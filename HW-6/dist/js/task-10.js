import { getRandomHexColor } from './getRandomHexColor.js'
var inputEl = document.querySelector('[type="number"]')
var createElement = document.querySelector('[data-create]')
var destroyElement = document.querySelector('[data-destroy]')
var parentDivEl = document.querySelector('#boxes')
createElement === null || createElement === void 0
	? void 0
	: createElement.addEventListener('click', function () {
			createBoxes(
				Number(inputEl === null || inputEl === void 0 ? void 0 : inputEl.value)
			)
	  })
destroyElement === null || destroyElement === void 0
	? void 0
	: destroyElement.addEventListener('click', destroyBoxes)
var arrayChildrenDiv = []
function createBoxes(amount) {
	var stepSize = 10
	var width = 30
	var height = 30
	if (arrayChildrenDiv.length != 0) {
		var el = arrayChildrenDiv[arrayChildrenDiv.length - 1]
		width = parseInt(el.style.width) + stepSize
		height = parseInt(el.style.height) + stepSize
	}
	for (var i = 0; i < amount; i += 1) {
		var divEl = document.createElement('div')
		divEl.classList.add('box')
		divEl.style.width = ''.concat(width, 'px')
		divEl.style.height = ''.concat(height, 'px')
		divEl.style.margin = '5px'
		divEl.style.background = getRandomHexColor()
		arrayChildrenDiv.push(divEl)
		width += stepSize
		height += stepSize
	}
	parentDivEl === null || parentDivEl === void 0
		? void 0
		: parentDivEl.append.apply(parentDivEl, arrayChildrenDiv)
}
function destroyBoxes() {
	var divDestroyEl = document.querySelectorAll('.box')
	divDestroyEl.forEach(function (el) {
		return el.remove()
	})
	arrayChildrenDiv = []
}
