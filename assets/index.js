function initApplication() {
    initHeader();
    addClickBurger();
}

function initHeader() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}

function addClickBurger() {
    const burgerItem = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-list');

    burgerItem.addEventListener('click', () => {
        burgerItem.classList.toggle('is-active');
        nav.classList.toggle('active');
    });
}

(function () {
    initApplication();
}());