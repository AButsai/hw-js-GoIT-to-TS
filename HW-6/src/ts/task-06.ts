const inputEl: HTMLElement | null = document.querySelector('#validation-input')
const DATA_LENGTH = inputEl?.dataset.length

inputEl?.addEventListener('blur', event =>
	inputEl.classList.add(changeBorderInputEl(event))
)

function changeBorderInputEl(e: Event) {
	if (inputEl?.classList.contains('invalid')) {
		inputEl.classList.remove('invalid')
	}

	if (inputEl?.classList.contains('valid')) {
		inputEl.classList.remove('valid')
	}
	const target = e.target as HTMLInputElement
	return target.value.length === Number(DATA_LENGTH) ? 'valid' : 'invalid'
}
