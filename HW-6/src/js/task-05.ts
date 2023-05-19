const inputValueEl: HTMLElement | null = document.querySelector('#name-input')
const outputSpanEl: HTMLElement | null = document.querySelector('#name-output')

inputValueEl?.addEventListener('input', updateOutputSpanEl)

function updateOutputSpanEl(e: Event) {
	if (outputSpanEl) {
		const target = e.target as HTMLInputElement
		outputSpanEl.textContent = target.value || 'Anonymous'
	}
}
