//const $body = document.querySelector('body');

//Высота окна
let containerHeight = window.innerHeight;
//Высота главной кнопки
let btn_size = document.querySelector('.main_page-slider-btn').scrollHeight;

//Орступ мобильной главной кнопки
let btn_bottom;
setTimeout(function(){
    btn_bottom = containerHeight - document.querySelector('.main_page-slider-btn-wrap').getBoundingClientRect().bottom;
    document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.setProperty('bottom', btn_bottom + 'px');
}, 1000);


//------------------------------------------------------
//Начальный размер карточек
let card_size = document.querySelector('.main_page-cards .main_page-card').scrollHeight;
//Все карточки
const cards = document.querySelectorAll('.main_page-cards .main_page-card');
//Начальный отступ
document.querySelector('.main_page-cards').style.setProperty('--card-margin', ((window.innerHeight - card_size) / 2) + 'px');

//------------------------------------------------------
//Блок горизонтального скролла
var horizontal = document.querySelector('.main_page-horizontal-block-wrapper');
//Высота блока горизонтального скролла
let horizontal_h = document.querySelector('.main_page-horizontal-wrap').scrollHeight;
//Расстояние до блока горизонтального скролла
let scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top;
//Ширина блока горизонтального скролла
let horizontal_w = horizontal.offsetWidth;
//Отступ до заголовка
let delta = 40;
//Скролл блока в px
let scroll_horiz = horizontal_w - window.innerWidth + 300;
if (window.innerWidth < 639)
    scroll_horiz = horizontal_w - window.innerWidth + 100; 

//Начальная установка padding (Сколько необходимо скрола)
if (window.innerWidth >= 480)
    document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + horizontal_h + 'px');
if (window.innerWidth >= 960)
    document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + 'px');
    
//Растояние до Боль-решение в мобильной версии
let videoScrollTop = 0;

//------------------------------------------------------
//Расстояние до скрытия кнопки
const slider_block = document.querySelector('.main_page-btn-wrap');
let scroll_to_slider = slider_block.getBoundingClientRect().bottom + window.scrollY;


//------------------------------------------------------
//Событие ресайза экрана
window.addEventListener( 'resize', setBreakpoint );

window.addEventListener('scroll', function(){
    //Скролл главной кнопки
    scroll_to_slider = slider_block.getBoundingClientRect().bottom + window.scrollY;
    if (window.innerWidth >= 1850)
        scroll_to_slider += 40;
    else if(window.innerWidth >= 960)
        scroll_to_slider += 30;
    else if(window.innerWidth >= 640)
        scroll_to_slider += 20;
    else if(window.innerWidth >= 480)
        scroll_to_slider += 30;
    else
        scroll_to_slider += 20;
    
    var scrollTop = window.scrollY;
    let margin_card = (window.innerHeight + card_size) / 2;
    document.querySelector('.main_page-cards').style.setProperty('--card-margin', ((window.innerHeight - card_size) / 2) + 'px');

    if (window.innerWidth > 959) {

        //Боль - Решение
        if(scrollTop >= 40 && scrollTop <= 260){
            var percent = Math.floor(((scrollTop - 40) / 10).toFixed(1));
            percent > 20 ? percent = 20 : percent = percent;
            document.querySelector('.visibility-actions.--center-block').style.setProperty('--fill-percent', percent / 20);            
        }
        if (scrollTop < 40)
            document.querySelector('.visibility-actions.--center-block').style.setProperty('--fill-percent', 0);            
        if (scrollTop > 260)
            document.querySelector('.visibility-actions.--center-block').style.setProperty('--fill-percent', 1);            


        //Карточки   
        if(scrollTop > margin_card && scrollTop <= (2 * containerHeight + 4 * margin_card )){            
            //Background карточек
            document.querySelector('.main_page-cards .main_page-cards-bg').style.position = 'fixed';
            document.querySelector('.main_page-cards .main_page-cards-bg').style.opacity = '1';    

            if(scrollTop < containerHeight + margin_card - 10)
                setTransition(1);
            else{
                if(scrollTop < containerHeight + 2 * margin_card)
                    setTransition(2);
                else{
                    if(scrollTop < containerHeight + 3 * margin_card)
                        setTransition(3);
                    else{
                        if(scrollTop < containerHeight + 4 * margin_card){
                            setTransition(4);
                            cards[0].style.transform = ``;
                            cards[1].style.transform = ``;
                            cards[2].style.transform = ``;
                            cards[3].style.transform = ``;
                            cards[4].style.transform = ``;
                            document.querySelector('.main_page-cards .main_page-cards-bg').style.transform = ``;
                            document.querySelector('.main_page-cards .main_page-cards-bg').style.transition = ``;

                        }
                        else{
                            if(scrollTop < 2* containerHeight + 4 * margin_card){
                                setTransition(5);
                                
                                cards[0].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                                cards[1].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                                cards[2].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                                cards[3].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                                cards[4].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                            
                                document.querySelector('.main_page-cards .main_page-cards-bg').style.transform = `translateY(calc(50% - ${(scrollTop - (containerHeight + 4 * margin_card))}px))`;
                                document.querySelector('.main_page-cards .main_page-cards-bg').style.transition = `none`;
                            } 
                        }
                    }
                }
            }
        }
        else{
            setTransition(0);
            document.querySelector('.main_page-cards .main_page-cards-bg').style = '';
        }

        //Блок с горизонтальным скроллом
        //Расстояние до блока горизонтального скролла (если изменилась высота экрана)
        scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top + window.scrollY;

        (window.innerWidth < 1850)
            delta = 30;

        if (scrollTop > (scroll_to_horizontal - delta)){
            document.querySelector('.main_page-horizontal-wrap').classList.add('--fixed');
            document.querySelector('.main_page-horizontal-wrap').style.transform = ``;
            
            if(scrollTop <= scroll_to_horizontal + scroll_horiz){
                horizontal.style.transform = `translateX(-${scrollTop - scroll_to_horizontal}px)`;
            }
            else{
                horizontal.style.transform = `translateX(-${scroll_horiz}px)`;
            
                //После окончания горизонтального скролла
                if(scrollTop <= scroll_to_horizontal + scroll_horiz + containerHeight){
                    document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scrollTop - scroll_to_horizontal - scroll_horiz}px)`;
                }
                else{
                    document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scroll_horiz}px)`;
                }

            }
        }
        else{
            document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
            horizontal.style.transform = ``;
        }

        //Скролл главной кнопки
        if(scrollTop + containerHeight >= scroll_to_slider)
        {
            document.querySelector('.main_page-btn').classList.add('--show');
            document.querySelector('.main_page-slider-btn').style.transition = `0s`;
            document.querySelector('.main_page-slider-btn').style.visibility = `hidden`;
    
    
        }
        else{
            document.querySelector('.main_page-btn').classList.remove('--show');
            document.querySelector('.main_page-slider-btn').style.visibility = ``;
            document.querySelector('.main_page-slider-btn').style.transition = ``;
        }
    }
    else{//----------------МОБИЛЬНАЯ ВЕРСИЯ------------------------

        //Кнопка
        if (scrollTop > 100){
        document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.setProperty('bottom', '');
            document.querySelector('.main_page-slider.--mobile .main_page-slider-btn').classList.add('--fixed');
        }
        else{
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.setProperty('bottom', btn_bottom + 'px');
            document.querySelector('.main_page-slider.--mobile .main_page-slider-btn').classList.remove('--fixed');
        }

        videoScrollTop = document.querySelector('.visibility-actions.--mobile').getBoundingClientRect().top + window.scrollY;
        
        //Боль - Решение
        if (scrollTop < videoScrollTop + 80)
            document.querySelector('.visibility-actions.--mobile').style.setProperty('--fill-percent', 0);            
        if (scrollTop > videoScrollTop + 80)
            document.querySelector('.visibility-actions.--mobile').style.setProperty('--fill-percent', 1);    
        
        //Карточки
        if (window.innerWidth > 639){
            card_size =  cards[0].scrollHeight;
            let scroll_to_block = document.querySelector('.main_page-cards').getBoundingClientRect().top + window.scrollY - (window.innerHeight - card_size) / 2;            

            if(scrollTop > scroll_to_block + 10 && scrollTop <= scroll_to_block + (2 * containerHeight + 4 * margin_card )){            
                //Background карточек                
                document.querySelector('.main_page-cards .main_page-cards-bg').style.position = 'fixed';
                document.querySelector('.main_page-cards .main_page-cards-bg').style.opacity = '1';        

                if(scrollTop <= scroll_to_block + margin_card)
                    setTransition(1);
                else{
                    if(scrollTop < scroll_to_block + 2 * margin_card)
                        setTransition(2);
                    else{
                        if(scrollTop < scroll_to_block + 3 * margin_card)
                            setTransition(3);
                        else{
                            if(scrollTop < scroll_to_block + 4 * margin_card ){
                                setTransition(4);
                                cards[0].style.transform = ``;
                                cards[1].style.transform = ``;
                                cards[2].style.transform = ``;
                                cards[3].style.transform = ``;
                                cards[4].style.transform = ``;
                                document.querySelector('.main_page-cards .main_page-cards-bg').style.transform = ``;
                                document.querySelector('.main_page-cards .main_page-cards-bg').style.transition = ``;

                                //Рассчет значения отступа до горизонтального скролла
                                scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top + window.scrollY;
                            }
                            else{
                                if(scrollTop < scroll_to_block + containerHeight + 4 * margin_card){
                                    setTransition(5);
                                    
                                    cards[0].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                    cards[1].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                    cards[2].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                    cards[3].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                    cards[4].style.transform = `translate(-50%, calc(-50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                
                                    document.querySelector('.main_page-cards .main_page-cards-bg').style.transform = `translateY(calc(50% - ${(scrollTop - (scroll_to_block + 4 * margin_card))}px))`;
                                    document.querySelector('.main_page-cards .main_page-cards-bg').style.transition = `none`;
                                } 
                            }
                        }
                    }
                }
            }
            else{
                setTransition(0);
                document.querySelector('.main_page-cards .main_page-cards-bg').style = '';
            }
        }

        //Горизонтальный скролл
        if (window.innerWidth > 479){
            delta = 30;

            if (window.innerWidth < 640)
                delta = 20;
            
            
            if (scrollTop > scroll_to_horizontal - delta){
                document.querySelector('.main_page-horizontal-wrap').classList.add('--fixed');
                document.querySelector('.main_page-horizontal-wrap').style.transform = ``;
                
                if(scrollTop <= scroll_to_horizontal + scroll_horiz){
                    horizontal.style.transform = `translateX(-${scrollTop - scroll_to_horizontal}px)`;
                }
                else{
                    horizontal.style.transform = `translateX(-${scroll_horiz}px)`;
                
                    //После окончания горизонтального скролла
                    if(scrollTop <= scroll_to_horizontal + scroll_horiz + containerHeight){
                        document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scrollTop - scroll_to_horizontal - scroll_horiz}px)`;
                    }
                    else{
                        document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scroll_horiz}px)`;
                    }

                }
            }
            else{
                document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
                horizontal.style.transform = ``;
            }
        }       

        //Скролл главной кнопки
        if(scrollTop + containerHeight >= scroll_to_slider)
        {
            document.querySelector('.main_page-btn').classList.add('--show');
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.transition = `0s`;
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.visibility = `hidden`;
    
    
        }
        else{
            document.querySelector('.main_page-btn').classList.remove('--show');
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.visibility = ``;
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn').style.transition = ``;
        }
    }      
    
});


//Функция закрепления и масштабирования карточек
function setTransition(indexFixed){

    cards.forEach((card, index) => {
        var wrap = card.querySelector('.main_page-card-wrapper');

        if (index < indexFixed){
            wrap.style.transform = `translateY(-${15 * (indexFixed - index - 1)}px) scale(${1 - 0.02 * (indexFixed - index - 1)})`;
            card.classList.add('--fixed');

        }
        else{
            wrap.style = 'none';
            card.classList.remove('--fixed');
        }
    });
}

//Функция изменения контрольных точек
function setBreakpoint(){
    //Высота окна
    containerHeight = window.innerHeight;
    //Высота главной кнопки
    btn_size = document.querySelector('.main_page-slider-btn').scrollHeight;
    //Начальный размер карточек
    card_size = document.querySelector('.main_page-cards .main_page-card').scrollHeight;
    //Начальный отступ
    document.querySelector('.main_page-cards').style.setProperty('--card-margin', ((window.innerHeight - card_size) / 2) + 'px');

    if (window.innerWidth >= 478){
        //Ширина блока горизонтального скролла
        horizontal = document.querySelector('.main_page-horizontal-block-wrapper');
        horizontal_w = horizontal.offsetWidth;

        //Высота блока горизонтального скролла
        horizontal_h = document.querySelector('.main_page-horizontal-wrap').scrollHeight;

        scroll_horiz = horizontal_w - window.innerWidth + 300; 

        if (window.innerWidth < 639)
            scroll_horiz = horizontal_w - window.innerWidth + 100; 

        //Начальная установка padding (если изменилась ширина экрана)
        document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + horizontal_h + 'px');
        
        if (window.innerWidth >= 960)
            document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + 'px');

        //Расстояние до блока горизонтального скролла (если изменилась высота экрана)
        scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top + window.scrollY;
            
        if (window.scrollY > scroll_to_horizontal - delta){
            document.querySelector('.main_page-horizontal-wrap').classList.add('--fixed');
        }
        else{
            document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
            horizontal.style.transform = ``;
        }
    }

    //Обнуляем карточки
    if (window.innerWidth <= 639){
        setTransition(0);
        cards[0].style.transform = ``;
        cards[1].style.transform = ``;
        cards[2].style.transform = ``;
        cards[3].style.transform = ``;
        cards[4].style.transform = ``;
        document.querySelector('.main_page-cards .main_page-cards-bg').style = '';
    }

    //Обнуляем горизонтальный скролл
    if (window.innerWidth <= 480){
        document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
        document.querySelector('.main_page-horizontal-wrap').style.transform = ``;
        document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', '');
        horizontal.style.transform = ``;
    }

    //Отступ мобильной главной кнопки
    if (window.innerWidth < 960){
        btn_bottom = containerHeight - document.querySelector('.main_page-slider-btn-wrap').getBoundingClientRect().bottom  - + window.scrollY;
        if(document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn:not(.--fixed)') != null)
            document.querySelector('.main_page-slider-btn-wrap .main_page-slider-btn:not(.--fixed)').style.setProperty('bottom', btn_bottom + 'px');
    }
}
