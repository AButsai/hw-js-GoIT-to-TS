"use strict";
var inputEl = document.querySelector('#validation-input');
var DATA_LENGTH = inputEl === null || inputEl === void 0 ? void 0 : inputEl.dataset.length;
inputEl === null || inputEl === void 0 ? void 0 : inputEl.addEventListener('blur', function (event) {
    return inputEl.classList.add(changeBorderInputEl(event));
});
function changeBorderInputEl(e) {
    if (inputEl === null || inputEl === void 0 ? void 0 : inputEl.classList.contains('invalid')) {
        inputEl.classList.remove('invalid');
    }
    if (inputEl === null || inputEl === void 0 ? void 0 : inputEl.classList.contains('valid')) {
        inputEl.classList.remove('valid');
    }
    var target = e.target;
    return target.value.length === Number(DATA_LENGTH) ? 'valid' : 'invalid';
}
