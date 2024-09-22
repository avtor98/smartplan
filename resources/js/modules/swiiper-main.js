import Swiper from 'swiper';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

const $body = document.querySelector('html');
$body.style['overflow-y'] = 'hidden';

window.onbeforeunload = function() { window.scrollTo(0, 0); };

const swiperContainer = document.querySelector('#page__wrapper > .main_page-slider');
const swiperItems = swiperContainer.querySelectorAll('.visibility-actions');
let swiperWrap, swiperSlides, swiperTicker, direction;

setWrapHeight();
createPagination(swiperContainer);

if(window.innerWidth > 650)
    swiperInit();

document.documentElement.classList.add('--no-slide');
document.documentElement.classList.add('first-slide-active');


window.addEventListener( 'resize', setWrapHeight );

function swiperInit() {    
    swiperContainer.classList.add('swiper', 'swiperVertical');
    direction = 0

    for (let i = 0; i < swiperItems.length; i++) {
        swiperItems[i].classList.add('swiper-slide');
    }
        
    swiperTicker = new Swiper(".swiperVertical", {
        modules: [Pagination, Mousewheel],
        loop: false,
        createElements: true,
        direction: 'vertical',
        allowTouchMove: true,
        slidesPerView: 1,
        SpaceBetween: 0,

        mousewheel: {
            enabled: true,
            thresholdDelta: 10,
            thresholdTime: 10,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        
        pagination: {
            el: ".main-swiper-pagination",
            clickable: true,
            bulletClass: "main-swiper-pagination-bullet",
            bulletActiveClass: "main-swiper-pagination-bullet-active",
            clickableClass: 'main-swiper-pagination-clickable',
            currentClass: 'main-swiper-pagination-current',
        },

        speed: 500,
        effect: "slide",
        preventInteractionOnTransition: true
    });

    swiperWrap = document.querySelector('.swiper-wrapper');
    swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperTicker.on('slideChangeTransitionStart', setActiveScreen);

    document.querySelector('.main-block-content-menu').style.removeProperty('opacity');
    document.querySelector('.main_page-slider-btn').style.removeProperty('opacity');
};

//Создание пагинации
function createPagination($sliderWrap, paginationClass = "main-swiper-pagination") {
    let div = document.createElement('div');
    div.classList.add(paginationClass);
    $sliderWrap.appendChild(div);
}

//Добавление класса активного слайда к HTML
function setActiveScreen() {
    swiperSlides[0].classList.contains('swiper-slide-active') ? document.documentElement.classList.add('first-slide-active') : document.documentElement.classList.remove('first-slide-active');
    swiperSlides[1].classList.contains('swiper-slide-active') ? document.documentElement.classList.contains('--no-slide') ? document.documentElement.classList.replace('--no-slide', 'second-slide-active') : document.documentElement.classList.add('second-slide-active') : document.documentElement.classList.remove('second-slide-active');
    
    //swiperSlides[5].classList.contains('swiper-slide-active') ? document.documentElement.classList.add('no-slide-pagination') : document.documentElement.classList.remove('no-slide-pagination');
    //swiperSlides[3].classList.contains('swiper-slide-active') ? document.documentElement.classList.add('fourth-slide-active') : document.documentElement.classList.remove('fourth-slide-active');
    //swiperSlides[4].classList.contains('swiper-slide-active') ? document.documentElement.classList.add('fifth-slide-active') : document.documentElement.classList.remove('fifth-slide-active');
    swiperSlides[swiperSlides.length - 1].classList.contains('swiper-slide-active') ? document.documentElement.classList.add('last-slide-active') : document.documentElement.classList.remove('last-slide-active');        


    if (swiperTicker.activeIndex == 1){
        if(swiperTicker.realIndex - direction > 0)
            swiperSlides[1].querySelector('p').style.transitionDelay = '2.5s';
    }
    else{
        swiperSlides[1].querySelector('p').style.removeProperty('transition-delay');
    }

    direction = swiperTicker.realIndex;

    if (swiperTicker.activeIndex >= 5){
        document.documentElement.classList.add('no-slide-pagination');
    }
    else{
        document.documentElement.classList.remove('no-slide-pagination');
    }

    if(swiperTicker.activeIndex == swiperSlides.length - 1)
    {
        $body.style['overflow-y'] = 'auto';
    }
    else{
        if(window.scrollY > 0){       	
            window.scrollTo(0, 0);
        }

        $body.style['overflow-y'] = 'hidden';
    }
        

}

//Изменение высоты блока слайдов
function setWrapHeight() { 
    let headerHeight = document.querySelector('.header').scrollHeight;    
    document.documentElement.style.setProperty('--swiper-height', (window.innerHeight - headerHeight) + 'px');

    let margin = window.innerHeight - headerHeight;
    margin -= document.querySelector('.main-block-content-menu').scrollHeight;
    margin -= document.querySelector('.main-block-title').scrollHeight;

    $body.style['height'] = window.innerHeight + "px";

    if(window.innerWidth < 960){
        $body.style['overflow-y'] = 'auto';
    }
    else if(window.innerWidth < 1200)
        margin -= (30 + 30 + 50);
    else if(window.innerWidth < 1850)
        margin -= (30 + 40 + 60);
    else
        margin -= (40 + 58 + 80);

    margin /= 2; 
        
    document.documentElement.style.setProperty('--margin-title', margin + 'px');


    /*
    if(window.innerWidth > 650)
        swiperInit();
    else
        if(swiperTicker != undefined){
            console.log("Слайдер есть");
            swiperTicker.destroy(true, true);
            
        }
        else
            console.log("Слайдера нет");

    console.log(swiperTicker);
    */

}

//Фикс прокрутки вверх после слайдера
window.addEventListener('scroll', function(){
    if(swiperTicker.activeIndex == swiperSlides.length - 1){
        swiperTicker.enabled = false;

        if(window.scrollY == 0){
            swiperTicker.enabled = true;
        }
    }
});