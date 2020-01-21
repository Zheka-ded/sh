// Конфигурация
// Header 
const HEADER_CSS = '.header';
const outHeader = document.querySelector(HEADER_CSS);
// Title 
const INTRO_TITLE_WRAP = '.intro__title-wrap';
const outIntroTitle = document.querySelector(INTRO_TITLE_WRAP);
// what-can
const WHAT_CAN_CSS = '.what-can';
const outWhatCan = document.querySelector(WHAT_CAN_CSS);
// // // ################################################################ // // //
// Реализация
// header
const header = new Header('L', 'LOGO', 'Об авторе', 'Покупка и оплата', 'Контакты');
header.headerBuild(outHeader);
// what-can
// const clients = new Skills()


// console.log(HEADER)
// Skills