import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
var parentDivEl = document.querySelector('.gallery');
var gallery = galleryItems
    .map(function (_a) {
    var preview = _a.preview, original = _a.original, description = _a.description;
    return "<a class=\"gallery__link\" href=\"".concat(original, "\">\n      <img\n      class=\"gallery__image\"\n      src=\"").concat(preview, "\"\n      alt=\"").concat(description, "\"\n      />\n      </a>");
})
    .join('');
parentDivEl === null || parentDivEl === void 0 ? void 0 : parentDivEl.insertAdjacentHTML('beforeend', gallery);
new SimpleLightbox('.gallery a', {
    showCounter: false,
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
});
//# sourceMappingURL=gallery.js.map