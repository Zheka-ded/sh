// Конфигурация
// Header 
const HEADER_CSS = '.header';
const outHeader = document.querySelector(HEADER_CSS);
// logo
const SRC_LOGO = 'https://media.istockphoto.com/vectors/creepy-clown-mask-vector-id900946834?b=1&k=6&m=900946834&s=170x170&h=2QsXqICSrDPjmAa1Gz-9j50yGXJ1JjfXmEHhmaYXTNw=';
// Skills
const SKILLS_CSS = '.skills';
const outSkills = document.querySelector(SKILLS_CSS);
// // // ################################################################ // // //
// Реализация
const header = new Header('L', 'LOGO', 'Об авторе', 'Покупка и оплата', 'Контакты');
// const header = new Header('ШУРА' ,SRC_LOGO, 'Об авторе', 'Покупка и оплата', 'Контакты');
header.headerBuild(outHeader);

// console.log(HEADER)
// Skills