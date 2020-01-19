// Header 
const HEADER_CSS = '.header';
const OUT = document.querySelector(HEADER_CSS);

const SRC_LOGO = 'https://media.istockphoto.com/vectors/creepy-clown-mask-vector-id900946834?b=1&k=6&m=900946834&s=170x170&h=2QsXqICSrDPjmAa1Gz-9j50yGXJ1JjfXmEHhmaYXTNw=';
const HEADER = new Header('Название сайта' ,SRC_LOGO, 'Об авторе', 'Покупка и оплата', 'Контакты');
HEADER.build(OUT);

console.log(HEADER)