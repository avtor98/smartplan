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
        }

        $('.header').toggleClass('--open_mobile_menu');
        $('body').toggleClass('overflow');
    });

    //Пункт решения в мобильном меню
    $('#toggle_menu').click(function(){
        $(this).toggleClass('--open_ex');
    });
}