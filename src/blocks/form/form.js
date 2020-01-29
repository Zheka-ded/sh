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


FORM_SEND.onclick = function (event) {
    event.preventDefault()
    console.log(FORM_USER_NAME.value);
    console.log(FORM_USER_EMAIL.value);
    console.log(FORM_USER_PHONE.value);
    if (FORM_USER_NAME.value != '' && FORM_USER_EMAIL.value != '' && FORM_USER_PHONE.value != '') {
        sendFormFunc()
    } else {
        alert('Заполните все поля');
    }
}


function sendFormFunc() {
    fetch('mail.php', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        'body': `user_name=${FORM_USER_NAME.value}&user_email=${FORM_USER_EMAIL.value}&user_phone=${FORM_USER_PHONE.value}`
    })
    .then(function () {window.location.href = 'thanks.html'})
}
