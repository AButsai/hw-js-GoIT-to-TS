var _a;
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
var refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};
var DEBOUNCE_DELAY = 300;
(_a = refs.searchBox) === null || _a === void 0 ? void 0 : _a.addEventListener('input', debounce(fetchResponse, DEBOUNCE_DELAY));
function fetchResponse(e) {
    clearHtml();
    var target = e.target;
    if (target.value === '') {
        return;
    }
    fetchCountries(target.value).then(getAllObjectsFromPromises).catch(onError);
}
function getAllObjectsFromPromises(data) {
    var _a, _b;
    var dataLength = data.length;
    if (dataLength > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
    }
    if (dataLength >= 2 && dataLength <= 10) {
        (_a = refs.countryList) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', countryList(data));
        return;
    }
    (_b = refs.countryInfo) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', countryInfo(data));
}
function countryList(data) {
    return data
        .map(function (obj) {
        return "<li class=\"list__item\"><img class=\"list__img\" src=\"".concat(obj.flags.svg, "\" alt=\"").concat(obj.name.official, "\"><h2 class=\"list__title\">").concat(obj.name.official, "</h2></li>");
    })
        .join('');
}
function countryInfo(data) {
    return data
        .map(function (obj) {
        return "\n      <div class=\"wrapper\">\n        <img class=\"img\" src=\"".concat(obj.flags.svg, "\" alt=\"").concat(obj.name.official, "\">\n        <h2 class=\"title\">").concat(obj.name.official, "</h2>\n      </div>\n      <p class=\"description\">Capital: <span class=\"description__span\">").concat(obj.capital, "</span></p>\n      <p class=\"description\">Population: <span class=\"description__span\">").concat(obj.population, "</span></p>\n      <p class=\"description\">Languages: <span class=\"description__span\">").concat(languagesCountry(obj.languages), "</span></p>\n      ");
    })
        .join('');
}
function languagesCountry(data) {
    return Object.values(data).join(', ');
}
function onError() {
    Notify.failure('Oops, there is no country with that name');
}
function clearHtml() {
    var countryInfo = refs.countryInfo, countryList = refs.countryList;
    if (countryInfo && countryList) {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
    }
}
//# sourceMappingURL=countries.js.map