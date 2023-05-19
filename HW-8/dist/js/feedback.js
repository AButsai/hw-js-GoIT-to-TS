import throttle from 'lodash.throttle';
var formFeedbackEl = document.querySelector('.feedback-form');
var emailInputEl = document.querySelector('[name="email"]');
var messageInputEl = document.querySelector('[name="message"]');
var KEY_LOCAL_STORAGE = 'feedback-form-state';
var dataInLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE);
if (dataInLocalStorage) {
    var data = JSON.parse(dataInLocalStorage);
    if (emailInputEl && messageInputEl) {
        emailInputEl.value = data.email;
        messageInputEl.value = data.message;
    }
}
var feedbackFormObj = {
    email: 'email',
    message: 'message',
};
formFeedbackEl === null || formFeedbackEl === void 0 ? void 0 : formFeedbackEl.addEventListener('input', throttle(function () {
    entryLocalStorage();
}, 500));
function entryLocalStorage() {
    var _a, _b;
    feedbackFormObj.email = (_a = emailInputEl === null || emailInputEl === void 0 ? void 0 : emailInputEl.value) !== null && _a !== void 0 ? _a : '';
    feedbackFormObj.message = (_b = messageInputEl === null || messageInputEl === void 0 ? void 0 : messageInputEl.value) !== null && _b !== void 0 ? _b : '';
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(feedbackFormObj));
}
formFeedbackEl === null || formFeedbackEl === void 0 ? void 0 : formFeedbackEl.addEventListener('submit', function (e) {
    e.preventDefault();
    if ((emailInputEl === null || emailInputEl === void 0 ? void 0 : emailInputEl.value) !== '' && (messageInputEl === null || messageInputEl === void 0 ? void 0 : messageInputEl.value) !== '') {
        console.log(feedbackFormObj);
        formFeedbackEl.reset();
        localStorage.removeItem(KEY_LOCAL_STORAGE);
    }
});
//# sourceMappingURL=feedback.js.map