
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

// Happy users array
let userArr = [
    {'name': ['Alan', 'Richman'], 'photo': 'user_1.png', 'description': 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis '},
    {'name': ['Tomothy', 'Bowman'], 'photo': 'user_2.png', 'description': 'Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat se'},
    {'name': ['Steve', 'Tracy'], 'photo': 'user_3.png', 'description': 'Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.'},
    {'name': ['Hellen', 'Johns'], 'photo': 'user_4.png', 'description': 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.'}
];
const arrows = document.querySelectorAll('.reviews__arrow');
const PUSH_ARROW = 'push';

const LEFT_ARROW_CSS = '.reviews__arrow-left-wrap';
const leftArrow = document.querySelector(LEFT_ARROW_CSS);

const RIGHT_ARROW_CSS = '.reviews__arrow-right-wrap';
const rightArrow = document.querySelector(RIGHT_ARROW_CSS);

const REVIEWS_DESCRIPTION = '.reviews__description';
const reviewsDescription = document.querySelector(REVIEWS_DESCRIPTION);

const USER_PHOTO = '.reviews__happy-user';
const userPhoto = document.querySelector(USER_PHOTO);

const USER_PHOTO_WRAP = '.reviews__happy-user-wrap';
const userPhotoWrap = document.querySelector(USER_PHOTO_WRAP);

const USER_NAME = '.reviews__name-user';
const userName = document.querySelector(USER_NAME);


let span = document.createElement('span');

let step = 0;

function reviewStart () {
    span.textContent = userArr[0].name[1]
    userName.textContent = `${userArr[0].name[0]} `;
    userName.append(span);
    reviewsDescription.textContent = userArr[0].description;
    userPhoto.setAttribute('src', `./img/${userArr[0].photo}`);
    userPhoto.setAttribute('alt', `photo_${userArr[0].name}`);
};
reviewStart();

function arrowColor () {
    for (i = 0; i < arrows.length; i++) {
        arrows[i].onmousedown = function () {
            this.classList.add(PUSH_ARROW);
        };
        arrows[i].onmouseup = function () {this.classList.remove(PUSH_ARROW)};
    }
};
arrowColor();

rightArrow.onclick = nextReview;
userPhotoWrap.onclick = nextReview;
// userPhotoWrap.ontouchstart = nextReview;

function nextReview () {
    step += 1;
    if (step >= userArr.length) step = 0;
    span.textContent = userArr[step].name[1]
    userName.textContent = `${userArr[step].name[0]} `;
    userName.append(span);
    reviewsDescription.textContent = userArr[step].description;
    userPhoto.setAttribute('src', `./img/${userArr[step].photo}`);
    userPhoto.setAttribute('alt', `photo_${userArr[step].name}`);
}

leftArrow.onclick = prevReview;
function prevReview () {
    step -= 1;
    if (step == -1) step = userArr.length - 1;
    span.textContent = userArr[step].name[1]
    userName.textContent = `${userArr[step].name[0]} `;
    userName.append(span);
    reviewsDescription.textContent = userArr[step].description;
    userPhoto.setAttribute('src', `./img/${userArr[step].photo}`);
    userPhoto.setAttribute('alt', `photo_${userArr[step].name}`);
}
