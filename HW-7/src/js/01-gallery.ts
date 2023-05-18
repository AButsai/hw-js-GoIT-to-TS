import { galleryItems } from './gallery-items.js'

import * as basicLightbox from 'basiclightbox'

const parentDivEl: HTMLElement | null = document.querySelector('.gallery')

const gallery = galleryItems
	.map(({ preview, original, description }) => {
		return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>`
	})
	.join('')

parentDivEl?.insertAdjacentHTML('beforeend', gallery)

parentDivEl?.addEventListener('click', onImgClick)

const instance = basicLightbox.create(`<img class="gallery__image">`, {
	onShow: () => {
		window.addEventListener('keydown', onEscClick)
		return true
	},

	onClose: () => {
		window.removeEventListener('keydown', onEscClick)
		return false
	},
})

function onImgClick(e: Event) {
	e.preventDefault()
	const target = e.target as HTMLElement
	if (target.nodeName !== 'IMG') {
		return
	}
	const image = instance.element()?.querySelector('.gallery__image')
	if (image instanceof HTMLImageElement) {
		image.src = target.dataset.source || ''
		instance.show()
	}
}

function onEscClick(e: KeyboardEvent) {
	if (e.key === 'Escape') {
		instance.close()
		return
	}
}
