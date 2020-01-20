// Конфигурация
// Header 
const HEADER_CSS = '.header';
const outHeader = document.querySelector(HEADER_CSS);
// Title 
const INTRO_TITLE_WRAP = '.intro__title-wrap';
const outIntroTitle = document.querySelector(INTRO_TITLE_WRAP);
// Skills
const SKILLS_CSS = '.skills';
const outSkills = document.querySelector(SKILLS_CSS);
// // // ################################################################ // // //
// Реализация
// header
const header = new Header('L', 'LOGO', 'Об авторе', 'Покупка и оплата', 'Контакты');
header.headerBuild(outHeader);




// console.log(HEADER)
// Skills