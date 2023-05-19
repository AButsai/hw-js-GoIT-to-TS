"use strict";
var ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
var ingredientsUL = document.querySelector('#ingredients');
var liForUl = ingredients === null || ingredients === void 0 ? void 0 : ingredients.map(function (ingredient) {
    var ingredientLi = document.createElement('li');
    ingredientLi.innerText = ingredient;
    ingredientLi.classList.add('item');
    return ingredientLi;
});
ingredientsUL === null || ingredientsUL === void 0 ? void 0 : ingredientsUL.append.apply(ingredientsUL, liForUl);
