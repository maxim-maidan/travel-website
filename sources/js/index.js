const getById = (id) => document.getElementById(id);
const getByIdStyle = (id) => document.getElementById(id).style;

function clearAllActive(){
    getById('home').setAttribute('class','nav__item');
    getById('destinations').setAttribute('class','nav__item');
    getById('about').setAttribute('class','nav__item');
    getById('partner').setAttribute('class','nav__item');
}

function makeActive(id){
    if(getById(id).getAttribute('class') != 'nav__item nav__item--active'){
        clearAllActive();
       getById(id).setAttribute('class','nav__item nav__item--active')
    }

}

window.addEventListener('scroll', function(){
    if(pageYOffset > 0){
        getByIdStyle('header').boxShadow = '0 1px 10px rgba(0, 0, 0, .2)';
        getByIdStyle('header').paddingTop = ' 20px';
        getByIdStyle('header').paddingBottom = ' 10px';
        getByIdStyle('header').position = 'fixed';
        getByIdStyle('menu__btn').top = '20px';
        getByIdStyle('finder').marginTop = '150px';
    }else{
        getByIdStyle('header').boxShadow = 'none';
        getByIdStyle('header').paddingTop = ' 40px';
        getByIdStyle('header').paddingBottom = ' 40px';
        getByIdStyle('header').position = 'relative';
        getByIdStyle('menu__btn').top = '40px';
        getByIdStyle('finder').marginTop = '0';
    }
});
