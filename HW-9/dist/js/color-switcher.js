"use strict";
var bodyEl = document.querySelector('body');
var startBtnEl = document.querySelector('[data-start]');
var stopBtnEl = document.querySelector('[data-stop]');
startBtnEl === null || startBtnEl === void 0 ? void 0 : startBtnEl.addEventListener('click', handleStartChangeColor);
stopBtnEl === null || stopBtnEl === void 0 ? void 0 : stopBtnEl.addEventListener('click', handleStopChangeColor);
var isForIntervalClear;
function handleStartChangeColor(e) {
    changeColorBody();
    addAttributeDisabledBtn(e);
    isForIntervalClear = true;
}
function handleStopChangeColor(e) {
    addAttributeDisabledBtn(e);
    isForIntervalClear = false;
}
function addAttributeDisabledBtn(e) {
    var isDisabledBtn = document.querySelector('[disabled]');
    if (isDisabledBtn) {
        isDisabledBtn.disabled = false;
    }
    e.target.disabled = true;
}
function changeColorBody() {
    var setIntervalChange = setInterval(function () {
        if (!isForIntervalClear) {
            clearInterval(setIntervalChange);
            return;
        }
        if (bodyEl) {
            bodyEl.style.background = getRandomHexColor();
        }
    }, 1000);
}
function getRandomHexColor() {
    return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}
//# sourceMappingURL=color-switcher.js.map