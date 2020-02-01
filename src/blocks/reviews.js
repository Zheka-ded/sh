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
