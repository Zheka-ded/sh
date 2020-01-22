// Конфигурация
// Header 
const HEADER_CSS = '.header';
const outHeader = document.querySelector(HEADER_CSS);
// Title 
const INTRO_TITLE_WRAP = '.intro__title-wrap';
const outIntroTitle = document.querySelector(INTRO_TITLE_WRAP);
// what-can
const WHAT_CAN_CSS = '.what-can__item-wrap';
const outWhatCan = document.querySelector(WHAT_CAN_CSS);
const WHAT_CAN = 'what-can';
// clients
const ICON_1 = `<svg xmlns="http://www.w3.org/2000/svg" width="33.093" height="39.03" viewBox="0 0 33.093 39.03"><path id="Forma_1" data-name="Forma 1" class="cls-1" d="M271.256,1069.77a30.025,30.025,0,0,0,4.973-7.96,29.363,29.363,0,0,0,1.037-2.97c0.11-.41.228-0.91,0.336-1.46,0.025-.12.042-0.23,0.065-0.35,0.026-.15.053-0.3,0.077-0.46a20.266,20.266,0,0,0,.257-4.21,13.635,13.635,0,0,1-.063-1.74,0.793,0.793,0,0,0,.085-0.1,0.609,0.609,0,0,0,.216-0.62s-0.026-.02-0.058-0.04a1.243,1.243,0,0,1,.053-0.53c0.062-.27-0.126-0.41-0.421-0.32a1.565,1.565,0,0,1-.6.11l-0.07-.05a0.65,0.65,0,0,0-.564.36,0.931,0.931,0,0,1-.059.08c-0.032.05-.805,0.13-1.712,0.31a20.578,20.578,0,0,0-6.779,2.72,27.043,27.043,0,0,0-8.48,8.44,3.067,3.067,0,0,1-2.5,1.29,11.835,11.835,0,0,0-11.735,7.52,1.041,1.041,0,0,0,1.121,1.49c16.319-.3,17.806,9.65,17.747,13.65-0.015.91,0.565,1.36,1.357,0.89,5.931-3.52,5.539-10.16,4.99-13.21A3.827,3.827,0,0,1,271.256,1069.77Zm-1.838-4.49a3.324,3.324,0,0,1-4.082.6,3.142,3.142,0,0,1-1.23-4.34,2.765,2.765,0,0,1,.378-0.51,3.337,3.337,0,0,1,4.083-.6,3.156,3.156,0,0,1,1.23,4.35A3.385,3.385,0,0,1,269.418,1065.28Zm-14.354,21.94c2.927-1.73,4.621-4.92,5.417-6.83,0.351-.84-0.13-1.25-0.91-0.77a14.6,14.6,0,0,0-5.467,6.75C253.753,1087.21,254.272,1087.69,255.064,1087.22Zm-5.826.63c4.469-2.42,6.873-7.52,7.845-10.09,0.322-.85-0.164-1.26-0.957-0.8-4.693,2.77-6.985,7.55-7.9,10.01C247.908,1087.82,248.43,1088.29,249.238,1087.85Zm-1.049-5.93c2.927-1.73,4.62-4.91,5.416-6.82,0.352-.84-0.13-1.25-0.91-0.77a14.615,14.615,0,0,0-5.467,6.75C246.877,1081.92,247.4,1082.39,248.189,1081.92Z" transform="translate(-245.188 -1049)"/></svg>`
const TITLE_TEXT_1 = 'clients';
const SUBTITLE_TEXT_1 = `This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean`;
// branding
const ICON_2 = `<svg xmlns="http://www.w3.org/2000/svg" width="40.093" height="38" viewBox="0 0 40.093 38"><path id="Forma_2" data-name="Forma 2" class="cls-2" d="M516.906,1085.94a1.961,1.961,0,0,1-.769-1.28l-0.26-1.66h-8.3l-0.262,1.66a1.953,1.953,0,0,1-.767,1.28c-0.694.51-1.243,0.95-.694,1.03,0.528,0.07,5.508,0,5.876,0s5.347,0.07,5.876,0C518.148,1086.89,517.6,1086.45,516.906,1085.94Zm-14.537-13.31c2.219-.02,2.495-0.55,3.218-2.78,1.334-3.52,7.341.92,3.619,2.46S500.15,1072.65,502.369,1072.63Zm22.751-23.18c-1.077-.86-2.86-0.44-3.984.96l-11.383,16.18c-1.124,1.39-1.118,1.13-.042,1.99s0.817,0.93,1.941-.46l13.382-14.57C526.158,1052.16,526.2,1050.32,525.12,1049.45Zm-2.927,1.94a6.729,6.729,0,0,0-.721-0.64,2.591,2.591,0,0,1,2.466-1.11A3.416,3.416,0,0,0,522.193,1051.39Zm7.975,3.53h-5.006l-2.211,2.41h6.415v19.25H494.084v-19.25h20.524l1.7-2.41H493.281a1.606,1.606,0,0,0-1.6,1.61v23.26a1.6,1.6,0,0,0,1.6,1.6h36.887a1.6,1.6,0,0,0,1.6-1.6v-23.26A1.606,1.606,0,0,0,530.168,1054.92Z" transform="translate(-491.688 -1049)"/></svg>`
const TITLE_TEXT_2 = 'branding';
const SUBTITLE_TEXT_2 = `This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean`;
// marketing
const ICON_3 = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"><g id="form3"><path id="Forma_3" data-name="forma-3" class="cls-3" d="M768.11,1050H738.9a3.9,3.9,0,0,0-3.895,3.89v29.22A3.91,3.91,0,0,0,738.9,1087H768.11a3.909,3.909,0,0,0,3.89-3.89v-29.22A3.9,3.9,0,0,0,768.11,1050Zm-28.885,5.27h28.549v19.48H739.225v-19.48Zm30.1,26.49H749.391a3.323,3.323,0,0,1-6.469,0h-5.246v-1.54h5.242a3.325,3.325,0,0,1,6.477,0h19.931v1.54Zm-12.419-23.67h3.981v13.36h-3.981v-13.36Zm-10.986,5.14H749.9v8.22h-3.983v-8.22Zm5.493-2.18H755.4v10.4h-3.984v-10.4Z" transform="translate(-735 -1050)"/></g></svg>`;

const TITLE_TEXT_3 = 'marketing';
const SUBTITLE_TEXT_3 = `This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean`;
// adv
const ICON_4 = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38"><path id="Forma_4" data-name="Forma 4" class="cls-4" d="M984.743,1060.66l-5.206.01s-4.116.18-4.109,4.17v0.11a3.286,3.286,0,0,0,.008,5.43c0.006,0.49.167,4.55,3.956,4.54,0,0,1.569.06,1.433,2.57l0.016,9.92a1.311,1.311,0,0,0,1.346,1.59s4.657-.67,2.34-5.43c1.743-1.81-.749-2.86.243-5.82a7.463,7.463,0,0,0,1.341-2.92l0.06-12.67A1.267,1.267,0,0,0,984.743,1060.66Zm23.857,2.55-0.02-11.57c0-1.51-1.28.17-1.28,0.17-6.04,9.43-18.544,8.69-18.544,8.69a1.077,1.077,0,0,0-1.239,1.27l0.021,10.93a1.265,1.265,0,0,0,1.321,1.25c13.971-.02,18.751,8.82,18.751,8.82s1.11,1.36,1.03-.06l-0.02-11.55A4.5,4.5,0,0,0,1008.6,1063.21Zm-13.756-1.55s8.216-1.15,12.2-7.33C1007.04,1054.33,1005.5,1061.55,994.844,1061.66Zm15.286,6.81a5.98,5.98,0,0,0-1.16-4.29S1011.1,1065.42,1010.13,1068.47Z" transform="translate(-974 -1051)"/></svg>`;
const TITLE_TEXT_4 = 'adv';
const SUBTITLE_TEXT_4 = `This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean`;

// // // ################################################################ // // //

// Реализация
// header
const header = new Header('L', 'LOGO', 'Об авторе', 'Покупка и оплата', 'Контакты');
header.headerBuild(outHeader);
// what-can

const clients = new Skills(WHAT_CAN ,ICON_1, TITLE_TEXT_1, SUBTITLE_TEXT_1);
clients.buildSkills(outWhatCan);

const branding = new Skills(WHAT_CAN ,ICON_2, TITLE_TEXT_2, SUBTITLE_TEXT_2);
branding.buildSkills(outWhatCan);

const marketing = new Skills(WHAT_CAN ,ICON_3, TITLE_TEXT_3, SUBTITLE_TEXT_3);
marketing.buildSkills(outWhatCan);

const adv = new Skills(WHAT_CAN ,ICON_4, TITLE_TEXT_4, SUBTITLE_TEXT_4);
adv.buildSkills(outWhatCan);

// добавление классов в объект what-can__svg-wrap
let whatCanSVGArrWrap = document.querySelectorAll('.what-can__svg-wrap');
let hexagonClass = 'hexagon';
let whatHexagonClass = 'what-can__hexagon';
addClass(whatCanSVGArrWrap, hexagonClass);
addClass(whatCanSVGArrWrap, whatHexagonClass);

// добавление классов в объект what-can__svg-wrap svg
let whatCanSVGArr = document.querySelectorAll('.what-can__svg-wrap svg');
let whatSVGCssClass = 'what-can__svg';
addClass(whatCanSVGArr, whatSVGCssClass);
console.log(whatCanSVGArr)

// функция добавления классов для NodeList
function addClass (itemArr, cssClass) {
    for (let item of itemArr) {
        item.classList.add(cssClass)
    }
    // for (i = 0; i < itemArr.length; i++) {
    //     itemArr[i].classList.add(cssClass)
    // }
};