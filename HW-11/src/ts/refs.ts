export interface IRefs {
  searchForm: HTMLFormElement | null;
  gallery: HTMLElement | null;
  galleryLinkEnd: HTMLElement | null;
  preloader: HTMLElement | null;
}

const refs: IRefs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  galleryLinkEnd: document.querySelector('.gallery__end'),
  preloader: document.querySelector('#preloader'),
};

export default refs;
