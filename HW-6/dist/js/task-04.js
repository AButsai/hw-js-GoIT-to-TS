"use strict";
var decrementButtonEl = document.querySelector('[data-action="decrement"]');
var incrementButtonEl = document.querySelector('[data-action="increment"]');
var spanValueEl = document.querySelector('#value');
var counterValue = 0;
decrementButtonEl === null || decrementButtonEl === void 0 ? void 0 : decrementButtonEl.addEventListener('click', function () {
    if (spanValueEl) {
        counterValue -= 1;
        spanValueEl.textContent = counterValue.toString();
    }
});
incrementButtonEl === null || incrementButtonEl === void 0 ? void 0 : incrementButtonEl.addEventListener('click', function () {
    if (spanValueEl) {
        counterValue += 1;
        spanValueEl.textContent = counterValue.toString();
    }
});
