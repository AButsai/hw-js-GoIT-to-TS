import { getRandomHexColor } from './getRandomHexColor'

const inputEl: HTMLInputElement | null =
	document.querySelector('[type="number"]')
const createElement: HTMLElement | null =
	document.querySelector('[data-create]')
const destroyElement: HTMLElement | null =
	document.querySelector('[data-destroy]')
const parentDivEl: HTMLElement | null = document.querySelector('#boxes')

createElement?.addEventListener('click', () => {
	createBoxes(Number(inputEl?.value))
})

destroyElement?.addEventListener('click', destroyBoxes)

let arrayChildrenDiv: HTMLElement[] = []

function createBoxes(amount: number) {
	const stepSize = 10
	let width = 30
	let height = 30

	if (arrayChildrenDiv.length != 0) {
		const el = arrayChildrenDiv[arrayChildrenDiv.length - 1]
		width = parseInt(el.style.width) + stepSize
		height = parseInt(el.style.height) + stepSize
	}

	for (let i = 0; i < amount; i += 1) {
		const divEl = document.createElement('div')
		divEl.classList.add('box')
		divEl.style.width = `${width}px`
		divEl.style.height = `${height}px`
		divEl.style.margin = '5px'
		divEl.style.background = getRandomHexColor()

		arrayChildrenDiv.push(divEl)

		width += stepSize
		height += stepSize
	}

	parentDivEl?.append(...arrayChildrenDiv)
}

function destroyBoxes() {
	const divDestroyEl: NodeListOf<Element> = document.querySelectorAll('.box')
	divDestroyEl.forEach(el => el.remove())
	arrayChildrenDiv = []
}
