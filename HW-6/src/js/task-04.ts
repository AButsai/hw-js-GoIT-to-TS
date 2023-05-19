const decrementButtonEl: HTMLElement | null = document.querySelector(
	'[data-action="decrement"]'
)
const incrementButtonEl: HTMLElement | null = document.querySelector(
	'[data-action="increment"]'
)
const spanValueEl: HTMLElement | null = document.querySelector('#value')

let counterValue = 0

decrementButtonEl?.addEventListener('click', () => {
	if (spanValueEl) {
		counterValue -= 1
		spanValueEl.textContent = counterValue.toString()
	}
})

incrementButtonEl?.addEventListener('click', () => {
	if (spanValueEl) {
		counterValue += 1
		spanValueEl.textContent = counterValue.toString()
	}
})
