const getById = (id) => document.getElementById(id);
const getByIdStyle = (id) => document.getElementById(id).style;
const addClass = (elemId, className) => getById(elemId).classList.add(className);
const removeClass = (elemId, className) => getById(elemId).classList.remove(className);

function makeActive(id) {
    Array.from(document.getElementsByClassName('nav__item')).forEach((elem)=>{
        elem.classList.remove('nav__item--active');
    });
    addClass(id,'nav__item--active');
}

window.addEventListener('scroll', function () {
    if (pageYOffset > 0) {
        addClass('header', 'header--scrolled');
        addClass('finder', 'finder--scrolled');
        addClass('menu__btn', 'menu__btn--scrolled');
    } else {
        removeClass('header', 'header--scrolled');
        removeClass('finder', 'finder--scrolled');
        removeClass('menu__btn', 'menu__btn--scrolled');
    }
});
