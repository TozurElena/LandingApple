import Swiper from "../lib/swiper-bundle.esm.browser.min.js";

//simpleBar

new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
        scrollbar: 'country__scrollbar',
        track: 'country__track'
    }
});

//slider
new Swiper('.goods__block', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView:1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    navigation: {
        nextEl: '.goods__arrow_next',
        prevEl: '.goods__arrow_prew',
    },
    preventClicks: true,
    a11y: false
});

//modal
const productMore = document.querySelectorAll('.product__more');
const modal = document.querySelector('.modal');

productMore.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('modal_open');
    })
});
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal_open');
    }
});

const formPlaceholder = document.querySelectorAll('.form__placeholder');
const formInput = document.querySelectorAll('.form__input');

formInput.forEach((input, i) => {
    input.addEventListener('focus', () => {
        formPlaceholder[i].classList.add('form__placeholder_active')
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            formPlaceholder[i].classList.remove('form__placeholder_active')
        }

    })
})

//choices
const countryBtn = document.querySelector('.country__btn');
const counrtyWrapper = document.querySelector('.country__wrapper');

countryBtn.addEventListener('click', () => {
    counrtyWrapper.classList.toggle('country__wrapper_open')
})

counrtyWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('country__choise')) {
        counrtyWrapper.classList.remove('country__wrapper_open');
    }
});

//price-currency
const dataCurrency = {};

const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('EU', {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
    }).format(value)
}

const showPrice = (currency = 'USD')=> {
    const priceElems = document.querySelectorAll('[data-price]');
    priceElems.forEach(elem => {
        elem.textContent = formatCurrency(elem.dataset.price, currency);
    })
}

showPrice();
