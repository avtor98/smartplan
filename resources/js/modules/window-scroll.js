//var CardScrollTop = 0;
//const $body = document.querySelector('body');

//Высота главной кнопки
let btn_size = document.querySelector('.main_page-btn').scrollHeight;

//------------------------------------------------------
//Начальный размер карточек
let card_size = document.querySelector('.main_page-cards .main_page-card').scrollHeight;
//Все карточки
const cards = document.querySelectorAll('.main_page-cards .main_page-card');
//Начальный отступ
document.querySelector('.main_page-cards').style.setProperty('--card-margin', ((window.innerHeight - card_size) / 2) + 'px');

//------------------------------------------------------
//Блок горизонтального скролла
const horizontal = document.querySelector('.main_page-horizontal-block-wrapper');
//Высота блока горизонтального скролла
let horizontal_h = horizontal.scrollHeight;
//Расстояние до блока горизонтального скролла
let scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top;
//Ширина блока горизонтального скролла
let horizontal_w = horizontal.offsetWidth;
//Скролл блока в px
let scroll_horiz = horizontal_w - window.innerWidth + 300;
//Начальная установка padding (Сколько необходимо скрола)
document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + 'px');

console.log(scroll_to_horizontal);


//------------------------------------------------------
//Событие ресайза экрана
window.addEventListener( 'resize', setBreakpoint );

window.addEventListener('scroll', function(){
    
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
        let containerHeight = window.innerHeight;       

        if(scrollTop > margin_card && scrollTop <= (2 * containerHeight + 4 * margin_card )){            
            //Background карточек
            document.querySelector('.main_page-cards .main_page-cards-bg').style.position = 'fixed';
            document.querySelector('.main_page-cards .main_page-cards-bg').style.opacity = '1';

            //Шлавная кнопка
            document.querySelector('.main_page-btn').classList.add('--show');        

            if(scrollTop < containerHeight + margin_card)
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
            document.querySelector('.main_page-btn').classList.remove('--show');
        }

        if (scrollTop > margin_card){
            document.querySelector('.main_page-btn').classList.add('--show');
        }

        //Блок с горизонтальным скроллом
        //Расстояние до блока горизонтального скролла (если изменилась высота экрана)
        scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top + window.scrollY;

        if (scrollTop > scroll_to_horizontal){
            document.querySelector('.main_page-horizontal-wrap').classList.add('--fixed');
            document.querySelector('.main_page-horizontal-wrap').style.transform = ``;
            
            if(scrollTop <= scroll_to_horizontal + scroll_horiz){
                horizontal.style.transform = `translateX(-${scrollTop - scroll_to_horizontal}px)`;
            }
            else{
                horizontal.style.transform = `translateX(-${scroll_horiz}px)`;
            
                //После окончания горизонтального скролла
                if(scrollTop <= scroll_to_horizontal + scroll_horiz + containerHeight)
                    document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scrollTop - scroll_to_horizontal - scroll_horiz}px)`;
                else
                    document.querySelector('.main_page-horizontal-wrap').style.transform = `translateY(-${scroll_horiz}px)`;

            }
        }
        else{
            document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
            horizontal.style.transform = ``;
        }






    }
    else{//----------------МОБИЛЬНАЯ ВЕРСИЯ------------------------

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
    //Ширина блока горизонтального скролла
    horizontal_w = horizontal.offsetWidth;
    scroll_horiz = horizontal_w - window.innerWidth + 300; 
    //Начальная установка padding (если изменилась ширина экрана)
    document.querySelector('.main_page-horizontal').style.setProperty('padding-bottom', scroll_horiz + 'px');
    //Расстояние до блока горизонтального скролла (если изменилась высота экрана)
    scroll_to_horizontal = document.querySelector('.main_page-horizontal').getBoundingClientRect().top + window.scrollY;
        
    if (window.scrollY > scroll_to_horizontal){
        document.querySelector('.main_page-horizontal-wrap').classList.add('--fixed');
    }
    else{
        document.querySelector('.main_page-horizontal-wrap').classList.remove('--fixed');
        horizontal.style.transform = ``;
    }
}
