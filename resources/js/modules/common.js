export function Common($) {

    
    //Кнопка-бургер (меню)
    $('#burger_button').click(function(){
        //$(this).toggleClass('open_mobile_menu');


        if($('.header').hasClass('--open_mobile_menu'))
        {
            if($('#toggle_menu').hasClass('--open_ex'))
            {
                $('#toggle_menu').removeClass('--open_ex');
            }

            $('body').css('overflow-y', 'auto');
        }
        else{
            $('body').css('overflow-y', 'hidden');
        }

        $('.header').toggleClass('--open_mobile_menu');
        //$('body').toggleClass('overflow');
    });

    //Пункт решения в мобильном меню
    $('#toggle_menu').click(function(){
        $(this).toggleClass('--open_ex');
    });

    //Открытие формы демоверсии
    $('#btn_open_form').click(function(){
        $('#phone-form').toggleClass('--open_form');

        setTimeout(function(){

            $('.first_block').removeClass('--overflow');
        
        }, 1500);
    });

    // Маска телефона
    /*
    $('#phone-input-mobile').mask('+7 (000) 000 00-00', {
        clearIfNotMatch: false,
        onKeyPress: function(cep, event, currentField, options) {
            if (cep.length === 5) {
                let lastChar = Number(cep[cep.length - 1]);
                if (lastChar === 7 || lastChar === 8) {
                    $(currentField).val('+7 (');
                }
            }
        }
    }).on('focus', function(){
        $(this).val('+7 (');

        var self = this;

        setTimeout(() => {
            self.setSelectionRange(4, 4);
        }, 100);
    });
    */

    //Открытие модальных окон
    $('.footer-links__link').click(function(){
        $('.modal_full[data-modal=' + $(this).data("modal") + ']').removeClass('--fade');
        //$('body').toggleClass('overflow');
        $('body').css('overflow-y', 'hidden');
    });

    //Закрытие модальных окон
    $('.modal_full-wrapper-btn_close').click(function(){
        var modal_type = $(this).closest('.modal_full').data("modal");
        $('.modal_full[data-modal=' + modal_type + ']').addClass('--fade');
        $('.modal_full[data-modal=' + modal_type + ']').animate({scrollTop: 0}, 400);
        //$('body').toggleClass('overflow');
        $('body').css('overflow-y', 'auto');
    });
}