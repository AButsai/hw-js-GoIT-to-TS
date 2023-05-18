import { galleryItems } from './galleryItems';

const parentDivEl: HTMLElement | null = document.querySelector('.gallery');

const gallery: string = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>`;
  })
  .join('');

parentDivEl?.insertAdjacentHTML('beforeend', gallery);

new SimpleLightbox('.gallery a', {
  showCounter: false,
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});
