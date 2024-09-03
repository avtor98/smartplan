const $body = document.querySelector('body');
const btn_mobile_menu = document.getElementById("burger_button");
const header = document.querySelector('.header');
const toggle_menu = document.getElementById('toggle_menu');

//Кнопка-бургер (меню)
btn_mobile_menu.onclick = function(){    
    if (header.classList.contains('--open_mobile_menu')){

        if (toggle_menu.classList.contains('--open_ex'))
            toggle_menu.classList.remove('--open_ex');

        if(document.documentElement.classList.contains('no-slide-pagination'))
            $body.style['overflow-y'] = 'auto';
    }
    else
        $body.style['overflow-y'] = 'hidden';

    header.classList.toggle("--open_mobile_menu");
}

//Пункт решения в мобильном меню
toggle_menu.onclick = function(){    
    toggle_menu.classList.toggle("--open_ex");
}

//Открытие модальных окон
var footer_modal = document.querySelectorAll('.footer-links__link');
var footer_modal_close = document.querySelectorAll('.modal_full-wrapper-btn_close');

footer_modal.forEach((item) => {
    item.onclick = function(){
        OpenModalForm(item.dataset.modal);
    } 
});

footer_modal_close.forEach((item, index) => {
    item.onclick = function(){      
        CloseModalForm(item.parentNode.parentNode);
    } 
});

function OpenModalForm(type){
    var click_modal = document.querySelector(".modal_full[data-modal=" + type + "");
    click_modal.classList.remove('--fade');
    $body.style['overflow-y'] = 'hidden';
}

//Закрытие модальных окон
function CloseModalForm(modal_close){  
    modal_close.classList.add('--fade');
    modal_close.animate({scrollTop: 0}, 400);
    $body.style['overflow-y'] = 'auto';
}