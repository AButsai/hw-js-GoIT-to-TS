export var fetchCountries = function (name) {
    return fetch("https://restcountries.com/v3.1/name/".concat(name, "?sort=name&fields=name,name.official,capital,population,flags,languages")).then(function (response) { return response.json(); });
};
//# sourceMappingURL=fetchCountries.js.map