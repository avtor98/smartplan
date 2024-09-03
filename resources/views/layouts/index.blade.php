@extends('layouts.app')

@section('title')
    SmartPlan
@endsection

@section('content')

    @include('include.header')

    <section class = "l-main main_page">

        <section id = "page__wrapper">

            <div class="main_page__content swiper">

                <div class="main_page__content-btn" style="opacity: 0">
                    <span>Попробовать бесплатно</span>
                </div>

                <div class="main-block">
                    <div class="main-block-title">
                        <h1>Экосистема
                            цифровых сервисов 
                            для девелоперов,
                            <span>в которой есть все</span></h1>
                    </div>
                    <div class="main-block-content-menu" style="opacity: 0">
                        <a href="/" class="main-block-content-menu-link">
                            <div class="main-block-content-menu-link-image __manage"></div>
                            <p>Система управления<br>объектами</p>
                        </a>
                        <a href="/" class="main-block-content-menu-link ">
                            <div class="main-block-content-menu-link-image __genplan"></div>
                            <p>Интерактивный<br>генплан</p>
                        </a>
                        <a href="/" class="main-block-content-menu-link">
                            <div class="main-block-content-menu-link-image __fids"></div>
                            <p>Экспорт<br>в агрегаторы</p>
                        </a>
                        <a href="/" class="main-block-content-menu-link">
                            <div class="main-block-content-menu-link-image __reserve"></div>
                            <p>Online<br>бронирование</p>
                        </a>
                        <a href="/" class="main-block-content-menu-link">
                            <div class="main-block-content-menu-link-image __calc"></div>
                            <p>Калькулятор<br>ипотеки</p>
                        </a>
                        <a href="/" class="main-block-content-menu-link">
                            <div class="main-block-content-menu-link-image __all"></div>
                            <p>Все<br>решения</p>
                        </a>
                        <div class="main-block-content-menu-link-scroll"></div>
                    </div>
                    <div class="main-block-back"></div>
                    <div class="main-block-video">
                        <video loop  autoplay muted>
                            <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                            Видео не поддерживается вашим браузером.
                        </video>
                    </div>
                </div>

                <div class="swiper-wrapper">
                    <div class="visibility-actions">
                        <!--Подменяющий блок в слайдере для первой страницы-->
                    </div>

                    <div class="visibility-actions">
                        <p style = "transition-delay: 2.5s">Создайте 
                        и наполните 
                        свой объект
                        недвижимости<br>
                        <span>в одно касание</span></p>
                    </div>

                    <div class="visibility-actions --right">
                        <p><span>Меняйте цены
                        хоть каждую минуту</span> –
                        они изменятся везде:<br>
                        на сайте, в прайсах,
                        в фидах</p>
                    </div>

                    <div class="visibility-actions">
                        <p>Интерактивный 
                        генплан и каталог
                        для сайта <span>за 15 минут</span><br>
                        без кода и сложных
                        инструкций</p>
                    </div>

                    <div class="visibility-actions --right">
                        <p>Настройте фиды
                        <span>во все агрегаторы</span><br>
                        в одно касание</p>
                    </div>

                    <div class="visibility-actions --center-block">
                        <div class="visibility-actions-content">
                            <h1 class="visibility-actions-content-title">
                                Smart plan <span>создан<br>
                                из болей </span>девелоперов<br>
                                и их Клиентов
                            </h1>
                            <div class="--pain-container">
                                <div class="--pain-container-btn">
                                    <span>Боль</span>
                                </div>
                                <div class="--pain-container-swipe">
                                    <div class="--pain-container-swipe-toggle"></div>
                                </div>
                                <div class="--pain-container-btn">
                                    <span>Решение</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    
    </section>

    @include('include.footer')


@endsection