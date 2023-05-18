const countCategories: NodeListOf<Element> = document.querySelectorAll(
	'#categories > .item'
)
console.log(`Number of categories: ${countCategories.length}`)

const elements = countCategories.forEach((element: Element) => {
	const contentFromH2: string | null | undefined =
		element.firstElementChild?.textContent
	const countChildrenFromElement: number | undefined =
		element.lastElementChild?.children.length
	console.log(
		`Category: ${contentFromH2} \nElements: ${countChildrenFromElement}`
	)
})
