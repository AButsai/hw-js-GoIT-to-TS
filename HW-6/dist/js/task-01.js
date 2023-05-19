"use strict";
var countCategories = document.querySelectorAll('#categories > .item');
console.log("Number of categories: ".concat(countCategories.length));
var elements = countCategories.forEach(function (element) {
    var _a, _b;
    var contentFromH2 = (_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
    var countChildrenFromElement = (_b = element.lastElementChild) === null || _b === void 0 ? void 0 : _b.children.length;
    console.log("Category: ".concat(contentFromH2, " \nElements: ").concat(countChildrenFromElement));
});
