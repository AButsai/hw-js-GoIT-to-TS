import Notiflix from 'notiflix';
var refsForm = document.querySelector('.form');
Notiflix.Notify.init({
    useIcon: false,
});
var handleSubmitForm = function (e) {
    e.preventDefault();
    var targetElement = e.target;
    if (targetElement) {
        var delayInput = targetElement.delay;
        var stepInput = targetElement.step;
        var amountInput = targetElement.amount;
        var delayForPromise = Number(delayInput.value);
        var stepForPromise = Number(stepInput.value);
        var amountForPromise = Number(amountInput.value);
        for (var i = 1; i <= amountForPromise; i += 1) {
            createPromise(i, delayForPromise)
                .then(function (value) {
                var _a = value, position = _a.position, delay = _a.delay;
                Notiflix.Notify.success("\u2705 Fulfilled promise ".concat(position, " in ").concat(delay, "ms"));
            })
                .catch(function (value) {
                var _a = value, position = _a.position, delay = _a.delay;
                Notiflix.Notify.failure("\u274C Rejected promise ".concat(position, " in ").concat(delay, "ms"));
            });
            delayForPromise += stepForPromise;
        }
    }
};
function createPromise(position, delay) {
    var shouldResolve = Math.random() > 0.3;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (shouldResolve) {
                resolve({ position: position, delay: delay });
            }
            reject({ position: position, delay: delay });
        }, delay);
    });
}
refsForm === null || refsForm === void 0 ? void 0 : refsForm.addEventListener('submit', handleSubmitForm);
//# sourceMappingURL=promises.js.map