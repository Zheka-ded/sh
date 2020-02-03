// Happy users array
let userArr = [
    // {'name': ['Alan', 'Richman'], 'photo': 'user_1.png', 'description': 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis '},
    {'name': ['Hans ', 'Kand'], 'photo': 'user_2.png', 'description': 'ААТ – это что-то!!! <br> Долго искал помощи в трейдинге, но зачастую никакой помощи не было, только пустые разговоры. <br> А тут, я получил ответы на все свои вопросы и помощника, который действительно помогает и делает результат.'},
    {'name': ['Пелевин', 'Олег'], 'photo': 'user_3.png', 'description': 'Имею большой опыт в торговле. Работал по разным стратегиям и с разными компаниями. <br> Прошёл все – начиная от скальпинга и заканчивая фондовым рынком.<br> С ААТ столкнулся впервые.<br> Скажу, как есть – это что-то новое, результатом более чем доволен.'},
    {'name': ['Larisa', 'Pluscevska'], 'photo': 'user_4.png', 'description': 'Имею небольшой опыт в торговле, точнее если сказать по правде то почти никакого. <br> Муж был всегда против чтобы я занималась торговлей, так как не был уверен в моих знаниях и силах. <br> С ААТ я смогла доказать себе и мужу, что торговля - это источник дохода и имея даже минимальные знания можно иметь стабильный доход.'}
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
    reviewsDescription.innerHTML = userArr[0].description;
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
    reviewsDescription.innerHTML = userArr[step].description;
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
    reviewsDescription.innerHTML = userArr[step].description;
    userPhoto.setAttribute('src', `./img/${userArr[step].photo}`);
    userPhoto.setAttribute('alt', `photo_${userArr[step].name}`);
}
