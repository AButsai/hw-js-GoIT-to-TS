import refs from './refs.js';
var markupCardsImages = function (data) {
    var _a;
    var largeImageURL = data.largeImageURL, webformatURL = data.webformatURL, tags = data.tags, likes = data.likes, views = data.views, comments = data.comments, downloads = data.downloads;
    var markupImage = "\n\t <div class=\"photo-card\">\n        <a class=\"gallery__link\" href=\"".concat(largeImageURL, "\">\n          <img class=\"gallery__image\" src=\"").concat(webformatURL, "\" alt=\"").concat(tags, "\" loading=\"lazy\" />\n          <div class=\"info\">\n            <p class=\"info-item\">\n              <b>Likes</b>\n              <span>").concat(likes, "</span>\n            </p>\n            <p class=\"info-item\">\n              <b>Views</b>\n              <span>").concat(views, "</span>\n            </p>\n            <p class=\"info-item\">\n              <b>Comments</b>\n              <span>").concat(comments, "</span>\n            </p>\n            <p class=\"info-item\">\n              <b>Downloads</b>\n              <span>").concat(downloads, "</span>\n            </p>\n          </div>\n        </a>\n      </div>\n  ");
    (_a = refs.gallery) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', markupImage);
};
export default markupCardsImages;
//# sourceMappingURL=markup.js.map