import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { IData, IObject, IRefs } from './fetchCountriesTypes';

const refs: IRefs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.searchBox?.addEventListener(
  'input',
  debounce(fetchResponse, DEBOUNCE_DELAY)
);

function fetchResponse(e: Event) {
  clearHtml();
  const target = e.target as HTMLInputElement;
  if (target.value === '') {
    return;
  }
  fetchCountries(target.value).then(getAllObjectsFromPromises).catch(onError);
}

function getAllObjectsFromPromises(data: IData[]) {
  const dataLength = data.length;
  if (dataLength > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (dataLength >= 2 && dataLength <= 10) {
    refs.countryList?.insertAdjacentHTML('beforeend', countryList(data));
    return;
  }

  refs.countryInfo?.insertAdjacentHTML('beforeend', countryInfo(data));
}

function countryList(data: IData[]) {
  return data
    .map(
      (obj: IData) =>
        `<li class="list__item"><img class="list__img" src="${obj.flags.svg}" alt="${obj.name.official}"><h2 class="list__title">${obj.name.official}</h2></li>`
    )
    .join('');
}

function countryInfo(data: IData[]) {
  return data
    .map(
      (obj: IData) =>
        `
      <div class="wrapper">
        <img class="img" src="${obj.flags.svg}" alt="${obj.name.official}">
        <h2 class="title">${obj.name.official}</h2>
      </div>
      <p class="description">Capital: <span class="description__span">${
        obj.capital
      }</span></p>
      <p class="description">Population: <span class="description__span">${
        obj.population
      }</span></p>
      <p class="description">Languages: <span class="description__span">${languagesCountry(
        obj.languages
      )}</span></p>
      `
    )
    .join('');
}

function languagesCountry(data: IObject) {
  return Object.values(data).join(', ');
}

function onError() {
  Notify.failure('Oops, there is no country with that name');
}

function clearHtml() {
  const { countryInfo, countryList } = refs;
  if (countryInfo && countryList) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
  }
}
