import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getColor from './card';
import Response from './fetch';
import { IData } from './indexInterfaces';
import markupCardsImages from './markup';
import refs from './refs';

const response = new Response();
let isSubmit = false;
let isResponse = true;
let totalHits = 0;

const markupCards = async () => {
  if (!isResponse) return;
  try {
    const requestResponse = await response.getResponse();
    checks(requestResponse as unknown as IData);
    simpleLightbox();
    infiniteObserver();
    getColor();
  } catch (error) {
    console.error(error);
  }
};

const reset = () => {
  const { galleryLinkEnd, gallery, preloader } = refs;
  if (galleryLinkEnd && gallery && preloader) {
    response.page = 1;
    totalHits = 0;
    isSubmit = true;
    isResponse = true;
    galleryLinkEnd?.classList.add('visually-hidden');

    gallery.innerHTML = '';
    preloader.style.display = 'block';
  }
};

const handleSubmitForm = (e: Event) => {
  e.preventDefault();
  reset();
  const target = e.target as HTMLFormElement;
  const { searchQuery } = target;
  if (searchQuery.value === '') {
    return Notify.warning('The input field must not be empty! Try again');
  }

  response.searchName = searchQuery.value;

  markupCards();

  target.reset();
};

refs.searchForm?.addEventListener('submit', handleSubmitForm);

const infiniteObserver = () => {
  const options: IntersectionObserverInit = {
    rootMargin: '-50px',
    threshold: [0, 0.25, 0.5, 0.75, 1.0],
  };
  const callback: IntersectionObserverCallback = function ([entry], observer) {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      isSubmit = false;

      refs.preloader?.classList.remove('visually-hidden');

      const setTimeoutId = setTimeout(() => {
        refs.preloader?.classList.add('visually-hidden');
        markupCards();
        clearTimeout(setTimeoutId);
      }, 1000);
    }
  };
  const observer = new IntersectionObserver(callback, options);
  const lastCard: HTMLElement | null = document.querySelector(
    '.photo-card:last-child'
  );

  if (lastCard) {
    observer.observe(lastCard);
  }
};

const checks = (data: IData) => {
  let { hits, totalHits } = data;
  const { preloader, galleryLinkEnd } = refs;
  if (preloader && galleryLinkEnd) {
    totalHits += hits.length;

    if (totalHits >= totalHits) {
      preloader.style.display = 'none';
      galleryLinkEnd.classList.remove('visually-hidden');
      isResponse = false;
    }

    if (hits.length === 0) {
      if (!isSubmit) return;
      galleryLinkEnd.classList.add('visually-hidden');
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    if (hits.length !== 0 && isSubmit)
      Notify.info(`Hooray! We found ${totalHits} images.`);

    hits.map(markupCardsImages);
  }
};

const simpleLightbox = () => {
  const instance = new SimpleLightbox('.gallery .gallery__link', {
    showCounter: false,
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
  });

  if (!isSubmit) {
    instance.refresh();
    const galleryElement: Element | null = document.querySelector('.gallery');
    const firstElementChild =
      galleryElement?.firstElementChild?.getBoundingClientRect();
    if (firstElementChild) {
      const { height: cardHeight } = firstElementChild;
      window.scrollBy({
        top: cardHeight,
        behavior: 'smooth',
      });
    }
  }
};
