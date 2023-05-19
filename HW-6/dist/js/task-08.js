"use strict";
var formEl = document.querySelector('.login-form');
if (formEl instanceof HTMLFormElement) {
    formEl.addEventListener('submit', handleSubmit);
}
function handleSubmit(e) {
    e.preventDefault();
    var form = e.currentTarget;
    if (!form) {
        return;
    }
    var email = form.elements.namedItem('email');
    var password = form.elements.namedItem('password');
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
    }
    else {
        var user = {
            userEmail: email.value,
            userPassword: password.value,
        };
        console.log(user);
    }
    if (email.value !== '' && password.value !== '') {
        var formElem = e.currentTarget;
        formElem === null || formElem === void 0 ? void 0 : formElem.reset();
    }
}
