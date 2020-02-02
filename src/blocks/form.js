const FORM_CSS = '.form';
const form = document.querySelector(FORM_CSS);

const FORM_USER_NAME_CSS = 'user_name';
const formUserName = document.querySelector(`[name="${FORM_USER_NAME_CSS}"]`);

const FORM_USER_EMAIL_CSS = 'user_email';
const formUserEmail = document.querySelector(`[name="${FORM_USER_EMAIL_CSS}"]`);

const FORM_PHONE_FLAG_CSS = '.form__phone-flag';
const formPhoneFlag = document.querySelector(FORM_PHONE_FLAG_CSS);
const countriesListWrap = document.querySelector(`${FORM_PHONE_FLAG_CSS} ul`);

const FORM_FLAG_SPAN_CSS = '.form__flag-span';
const formFlagSpan = document.querySelector(FORM_FLAG_SPAN_CSS);

const FORM_USER_PHONE_CSS = 'user_phone';
const formUserPhone = document.querySelector(`[name="${FORM_USER_PHONE_CSS}"]`);

const FORM_SEND_CSS = 'send_form';
const formSend = document.querySelector(`[name="${FORM_SEND_CSS}"]`);

const FORM_INPUT_ALERT_EMAIL_CSS = '.form__input-alert-email';
const formInputAlertEmail = document.querySelector(FORM_INPUT_ALERT_EMAIL_CSS);

const FORM_INPUT_ALERT_PHONE_CSS = '.form__input-alert-phone';
const formInputAlertPhone = document.querySelector(FORM_INPUT_ALERT_PHONE_CSS);

const allCountriesArr = {
    'RUS':{'name':'Россия', 'tel_code': '+7', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/160px-Flag_of_Russia.svg.png'},
    'LAT':{'name':'Latvija', 'tel_code': '+371', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/160px-Flag_of_Latvia.svg.png'},
    'LTU':{'name':'Lietuva', 'tel_code': '+370', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/160px-Flag_of_Lithuania.svg.png'},
    'EST':{'name':'Eesti', 'tel_code': '+372', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/160px-Flag_of_Estonia.svg.png'},
    'GER':{'name':'Deutschland', 'tel_code': '+49', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/160px-Flag_of_Germany.svg.png'},
    'ITA':{'name':'Italia', 'tel_code': '+39', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/160px-Flag_of_Italy.svg.png'},
    'ESP':{'name':'España', 'tel_code': '+34', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/160px-Flag_of_Spain.svg.png'},
    'BLR':{'name':'Беларусь', 'tel_code': '+375', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/160px-Flag_of_Belarus.svg.png'},
    'UKR':{'name':'Україна', 'tel_code': '+380', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/160px-Flag_of_Ukraine.svg.png'},
    'KAZ':{'name':'Қазақстан', 'tel_code': '+7', 'url_flag':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/160px-Flag_of_Kazakhstan.svg.png'}
}

const checkEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
// Отправка формы
formSend.onclick = function (event) {
    event.preventDefault();

    if (formUserName.value.trim() != '' && formUserEmail.value.trim() != '' && formUserPhone.value.trim() != '') {
        if (checkEmail.test(formUserEmail.value.trim())) {
            sendFormFunc();
        } else{

            formInputAlertEmail.classList.add('form__input-alert-email-active');
        }
    } else {
        alert('Заполните все поля');
    }
}

// Проверка ввода в инпут почты
formUserEmail.oninput = () => {

    if (!checkEmail.test(formUserEmail.value.trim())) {
        formUserEmail.classList.add('form__error')
        formUserEmail.value = formUserEmail.value.toLowerCase();
    } else {
        formUserEmail.classList.remove('form__error');
        formInputAlertEmail.classList.remove('form__input-alert-email-active');
    }
}

// Проверка ввода номера телефона
formUserPhone.onkeypress = (event) => {
    if (event.charCode >= 48 && event.charCode <= 57) {
        formUserPhone.classList.remove('form__error');
        formInputAlertPhone.classList.remove('form__input-alert-phone-active');
    } else {
        formUserPhone.classList.add('form__error');
        formInputAlertPhone.classList.add('form__input-alert-phone-active');
        return false;
    }
}

// Отправка формы
function sendFormFunc () {
    fetch('mail.php', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        'body': `user_name=${formUserName.value.trim()}&user_email=${formUserEmail.value.trim()}&user_phone=${formUserPhone.value.trim()}`
        
    })
    .then(function () {window.location.href = 'thanks.html'})
}

// Заполнение спаска странами
function fillCountriesList (arr) {
    for(let key in arr){
        let li = document.createElement('li');
        li.setAttribute('data-key', `${key}`);
        li.setAttribute('data-code', `${arr[key].tel_code}`);
        li.setAttribute('url-flag', `${arr[key].url_flag}`)
        li.textContent = `${arr[key].name}`;
        countriesListWrap.append(li);

        let span = document.createElement('span');
        span.style.backgroundImage = `url('${arr[key].url_flag}')`;
        li.prepend(span);
    }
}
fillCountriesList(allCountriesArr);

// Выбор страны
function selCountryFunk () {
    let countriesList = document.querySelectorAll(`${FORM_PHONE_FLAG_CSS} ul li`);
    // Стартовое заполнение поля
        formFlagSpan.style.backgroundImage = `url('${countriesList[0].getAttribute('url-flag')}')`;
        formUserPhone.value = countriesList[0].getAttribute('data-code');
        
    // Выбор страны из списка
    for(i = 0; i < countriesList.length; i++) {
        countriesList[i].onclick = function () {
            formFlagSpan.style.backgroundImage = `url('${this.getAttribute('url-flag')}')`;
            formUserPhone.value = this.getAttribute('data-code');
            formPhoneFlag.classList.remove('phone-flag-active');
        }
    }
}
selCountryFunk()

// Открытие меню стран
formFlagSpan.onclick = (event) => {
    event.stopPropagation();
    formPhoneFlag.classList.toggle('phone-flag-active');
}

// Закрытие меню нажатием в любой части экрана
document.onclick = function () {
    if (formPhoneFlag.classList.contains('phone-flag-active')) formPhoneFlag.classList.remove('phone-flag-active');
}
