const formEl: HTMLFormElement | null = document.querySelector('.login-form')

if (formEl instanceof HTMLFormElement) {
	formEl.addEventListener('submit', handleSubmit)
}

function handleSubmit(e: Event) {
	e.preventDefault()

	const form = e.currentTarget as HTMLFormElement

	if (!form) {
		return
	}

	const email = form.elements.namedItem('email') as HTMLInputElement
	const password = form.elements.namedItem('password') as HTMLInputElement

	if (email.value === '' || password.value === '') {
		alert('Please fill in all the fields!')
	} else {
		const user = {
			userEmail: email.value,
			userPassword: password.value,
		}

		console.log(user)
	}

	if (email.value !== '' && password.value !== '') {
		const formElem = e.currentTarget as HTMLFormElement
		formElem?.reset()
	}
}
