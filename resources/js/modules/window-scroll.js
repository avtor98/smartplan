//var CardScrollTop = 0;
//const $body = document.querySelector('body');

//Высота главной кнопки
let btn_size = document.querySelector('.main_page-btn').scrollHeight;

//Начальный размер карточек
let card_size = document.querySelector('.main_page-cards .main_page-card').scrollHeight;
//Все карточки
const cards = document.querySelectorAll('.main_page-cards .main_page-card');
//Начальный отступ
document.querySelector('.main_page-cards').style.setProperty('--card-margin', ((window.innerHeight - card_size) / 2) + 'px');


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

        if(scrollTop > margin_card - 10 && scrollTop <= (2 * containerHeight + 5 * margin_card )){            
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
