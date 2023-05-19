const inputElem: HTMLInputElement | null =
	document.querySelector('#font-size-control')
const spanElem: HTMLElement | null = document.querySelector('#text')

if (inputElem && spanElem) {
	spanElem.style.fontSize = inputElem.value + 'px'

	inputElem?.addEventListener('input', () => {
		spanElem.style.fontSize = inputElem.value + 'px'
	})
}
