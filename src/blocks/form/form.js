const FORM_CSS = '.form';
const form = document.querySelector(FORM_CSS);

const FORM_USER_NAME_CSS = 'user_name';
const FORM_USER_NAME = document.querySelector(`[name="${FORM_USER_NAME_CSS}"]`);

const FORM_USER_EMAIL_CSS = 'user_email';
const FORM_USER_EMAIL = document.querySelector(`[name="${FORM_USER_EMAIL_CSS}"]`);

const FORM_USER_PHONE_CSS = 'user_phone';
const FORM_USER_PHONE = document.querySelector(`[name="${FORM_USER_PHONE_CSS}"]`);

const FORM_SEND_CSS = 'send_form';
const FORM_SEND = document.querySelector(`[name="${FORM_SEND_CSS}"]`);

let r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

FORM_SEND.onclick = function checkFormFunc (event) {
    event.preventDefault();
    
    if (FORM_USER_NAME.value.trim() != '' && FORM_USER_EMAIL.value.trim() != '' && FORM_USER_PHONE.value.trim() != '') {
        if (!r.test(FORM_USER_EMAIL.value.trim())) {
            alert('Веден не верный адрес почты');
        } else{
            sendFormFunc()
        }
    } else {
        alert('Заполните все поля');
    }
}

// FORM_SEND.onclick = checkFormFunc;
// // FORM_SEND.ontouchstart = checkFormFunc;
// FORM_SEND.addEventListener('touchstart', checkFormFunc);
// FORM_SEND.addEventListener('click', checkFormFunc);

function sendFormFunc() {
    fetch('mail.php', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        'body': `user_name=${FORM_USER_NAME.value.trim()}&user_email=${FORM_USER_EMAIL.value.trim()}&user_phone=${FORM_USER_PHONE.value.trim()}`
    })
    .then(function () {window.location.href = 'thanks.html'})
}
