"use strict";
var inputValueEl = document.querySelector('#name-input');
var outputSpanEl = document.querySelector('#name-output');
inputValueEl === null || inputValueEl === void 0 ? void 0 : inputValueEl.addEventListener('input', updateOutputSpanEl);
function updateOutputSpanEl(e) {
    if (outputSpanEl) {
        var target = e.target;
        outputSpanEl.textContent = target.value || 'Anonymous';
    }
}
