var getColor = function () {
    var photoKart = document.querySelectorAll('.photo-card');
    photoKart === null || photoKart === void 0 ? void 0 : photoKart.forEach(function (cart) {
        if (cart) {
            var color_1 = getRandomHexColor();
            if (color_1.length !== 7) {
                color_1 = '#14e2e9';
            }
            cart.style.borderColor = color_1;
            cart.addEventListener('mouseover', function () {
                cart.style.boxShadow = "0 10px 15px ".concat(color_1);
            });
            cart.addEventListener('mouseout', function () {
                cart.style.boxShadow = "0 0 0 transparent";
            });
        }
    });
};
function getRandomHexColor() {
    return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}
export default getColor;
//# sourceMappingURL=card.js.map