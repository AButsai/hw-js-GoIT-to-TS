"use strict";
var inputElem = document.querySelector('#font-size-control');
var spanElem = document.querySelector('#text');
if (inputElem && spanElem) {
    spanElem.style.fontSize = inputElem.value + 'px';
    inputElem === null || inputElem === void 0 ? void 0 : inputElem.addEventListener('input', function () {
        spanElem.style.fontSize = inputElem.value + 'px';
    });
}
