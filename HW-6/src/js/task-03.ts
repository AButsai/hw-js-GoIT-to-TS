interface IImages {
	url: string
	alt: string
}

const images: IImages[] = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
]

const galleryUlEl: HTMLElement | null = document.querySelector('.gallery')
if (galleryUlEl) {
	galleryUlEl.style.display = 'flex'
	galleryUlEl.style.listStyle = 'none'
	galleryUlEl.style.margin = '-10px'
	galleryUlEl.style.alignItems = 'center'
	galleryUlEl.insertAdjacentHTML('beforeend', iteratingArray())
}

function iteratingArray() {
	return images
		.map(
			({ url, alt }) =>
				`<li class="item"><img class="img" src="${url}" alt="${alt}"></li>`
		)
		.join('')
}

const liEl: NodeListOf<HTMLElement> = document.querySelectorAll('.item')
liEl.forEach((el: HTMLElement) => {
	el.style.margin = '10px'
	el.style.maxWidth = '500px'
})

const imgEl: NodeListOf<HTMLElement> = document.querySelectorAll('.img')
imgEl.forEach((el: HTMLElement) => {
	el.style.width = '100%'
	el.style.height = 'auto'
	el.style.display = 'block'
})
