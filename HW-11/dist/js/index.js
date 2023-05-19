var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value)
				  })
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1]
					return t[1]
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this
				}),
			g
		)
		function verb(n) {
			return function (v) {
				return step([n, v])
			}
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.')
			while ((g && ((g = 0), op[0] && (_ = 0)), _))
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t
					if (((y = 0), t)) op = [op[0] & 2, t.value]
					switch (op[0]) {
						case 0:
						case 1:
							t = op
							break
						case 4:
							_.label++
							return { value: op[1], done: false }
						case 5:
							_.label++
							y = op[1]
							op = [0]
							continue
						case 7:
							op = _.ops.pop()
							_.trys.pop()
							continue
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0
								continue
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1]
								break
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1]
								t = op
								break
							}
							if (t && _.label < t[2]) {
								_.label = t[2]
								_.ops.push(op)
								break
							}
							if (t[2]) _.ops.pop()
							_.trys.pop()
							continue
					}
					op = body.call(thisArg, _)
				} catch (e) {
					op = [6, e]
					y = 0
				} finally {
					f = t = 0
				}
			if (op[0] & 5) throw op[1]
			return { value: op[0] ? op[1] : void 0, done: true }
		}
	}
var _a
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
import getColor from './card.js'
import Response from './fetch.js'
import markupCardsImages from './markup.js'
import refs from './refs.js'
var response = new Response()
var isSubmit = false
var isResponse = true
var totalHits = 0
var markupCards = function () {
	return __awaiter(void 0, void 0, void 0, function () {
		var requestResponse, error_1
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					if (!isResponse) return [2 /*return*/]
					_a.label = 1
				case 1:
					_a.trys.push([1, 3, , 4])
					return [4 /*yield*/, response.getResponse()]
				case 2:
					requestResponse = _a.sent()
					checks(requestResponse)
					simpleLightbox()
					infiniteObserver()
					getColor()
					return [3 /*break*/, 4]
				case 3:
					error_1 = _a.sent()
					console.error(error_1)
					return [3 /*break*/, 4]
				case 4:
					return [2 /*return*/]
			}
		})
	})
}
var reset = function () {
	var galleryLinkEnd = refs.galleryLinkEnd,
		gallery = refs.gallery,
		preloader = refs.preloader
	if (galleryLinkEnd && gallery && preloader) {
		response.page = 1
		totalHits = 0
		isSubmit = true
		isResponse = true
		galleryLinkEnd === null || galleryLinkEnd === void 0
			? void 0
			: galleryLinkEnd.classList.add('visually-hidden')
		gallery.innerHTML = ''
		preloader.style.display = 'block'
	}
}
var handleSubmitForm = function (e) {
	e.preventDefault()
	reset()
	var target = e.target
	var searchQuery = target.searchQuery
	if (searchQuery.value === '') {
		return Notify.warning('The input field must not be empty! Try again')
	}
	response.searchName = searchQuery.value
	markupCards()
	target.reset()
}
;(_a = refs.searchForm) === null || _a === void 0
	? void 0
	: _a.addEventListener('submit', handleSubmitForm)
var infiniteObserver = function () {
	var options = {
		rootMargin: '-50px',
		threshold: [0, 0.25, 0.5, 0.75, 1.0],
	}
	var callback = function (_a, observer) {
		var _b
		var entry = _a[0]
		if (entry.isIntersecting) {
			observer.unobserve(entry.target)
			isSubmit = false
			;(_b = refs.preloader) === null || _b === void 0
				? void 0
				: _b.classList.remove('visually-hidden')
			var setTimeoutId_1 = setTimeout(function () {
				var _a
				;(_a = refs.preloader) === null || _a === void 0
					? void 0
					: _a.classList.add('visually-hidden')
				markupCards()
				clearTimeout(setTimeoutId_1)
			}, 1000)
		}
	}
	var observer = new IntersectionObserver(callback, options)
	var lastCard = document.querySelector('.photo-card:last-child')
	if (lastCard) {
		observer.observe(lastCard)
	}
}
var checks = function (data) {
	var hits = data.hits,
		totalHits = data.totalHits
	var preloader = refs.preloader,
		galleryLinkEnd = refs.galleryLinkEnd
	if (preloader && galleryLinkEnd) {
		totalHits += hits.length
		if (totalHits >= totalHits) {
			preloader.style.display = 'none'
			galleryLinkEnd.classList.remove('visually-hidden')
			isResponse = false
		}
		if (hits.length === 0) {
			if (!isSubmit) return
			galleryLinkEnd.classList.add('visually-hidden')
			return Notify.failure(
				'Sorry, there are no images matching your search query. Please try again.'
			)
		}
		if (hits.length !== 0 && isSubmit)
			Notify.info('Hooray! We found '.concat(totalHits, ' images.'))
		hits.map(markupCardsImages)
	}
}
var simpleLightbox = function () {
	var _a
	var instance = new SimpleLightbox('.gallery .gallery__link', {
		showCounter: false,
		captions: true,
		captionDelay: 250,
		captionSelector: 'img',
		captionType: 'attr',
		captionsData: 'alt',
		captionPosition: 'bottom',
	})
	if (!isSubmit) {
		instance.refresh()
		var galleryElement = document.querySelector('.gallery')
		var firstElementChild =
			(_a =
				galleryElement === null || galleryElement === void 0
					? void 0
					: galleryElement.firstElementChild) === null || _a === void 0
				? void 0
				: _a.getBoundingClientRect()
		if (firstElementChild) {
			var cardHeight = firstElementChild.height
			window.scrollBy({
				top: cardHeight,
				behavior: 'smooth',
			})
		}
	}
}
//# sourceMappingURL=index.js.map
