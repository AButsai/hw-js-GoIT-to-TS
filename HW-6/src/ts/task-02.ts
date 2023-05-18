const ingredients: string[] = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
]

const ingredientsUL: HTMLElement | null = document.querySelector('#ingredients')

const liForUl: HTMLElement[] = ingredients?.map((ingredient: string) => {
	const ingredientLi: HTMLElement = document.createElement('li')
	ingredientLi.innerText = ingredient
	ingredientLi.classList.add('item')

	return ingredientLi
})

ingredientsUL?.append(...liForUl)
