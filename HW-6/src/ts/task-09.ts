import { getRandomHexColor } from './getRandomHexColor'

const bodyEl: HTMLElement | null = document.querySelector('body')
const spanEl: HTMLElement | null = document.querySelector('.color')
const buttonEl: HTMLElement | null = document.querySelector('.change-color')

buttonEl?.addEventListener('click', handlerClick)

function handlerClick() {
	const randomColor = getRandomHexColor()
	if (bodyEl && spanEl) {
		bodyEl.style.background = randomColor
		spanEl.textContent = randomColor
	}
}
