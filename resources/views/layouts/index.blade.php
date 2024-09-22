@extends('layouts.app')

@section('title')
    SmartPlan
@endsection

@section('content')

    @include('include.header')

    <section class = "l-main main_page">

        <section id = "page__wrapper">

            <div class="main_page-slider swiper">

                <div class="main_page-slider-btn" style="opacity: 0">
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
                        <video loop  muted>
                            <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                            Видео не поддерживается вашим браузером.
                        </video>

                        <div class="main-block-video-btn">
                            <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5482 11.3962L6.86052 0.629684C3.89926 -1.17173 0.214287 1.10738 0.214287 4.7339V26.2659C0.214287 29.8971 3.89926 32.1715 6.86052 30.3701L24.5482 19.609C27.5316 17.7934 27.5316 13.2118 24.5482 11.3962Z" fill="#1E69FE"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="swiper-wrapper">
                    <div class="visibility-actions">
                       
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
                                <span>Smart plan</span> превращает<br>
                                боли в <span>решения</span> 
                            </h1>
                            <div class="--pain-container">
                                <div class="--pain-container-btn">
                                    <div class="--pain-container-btn-main">
                                        <span>Боль</span>
                                    </div>
                                    <div class="--pain-container-btn-scroll">
                                        <span>Боль</span>
                                    </div>
                                </div>
                                <div class="--pain-container-swipe">
                                    <div class="--pain-container-swipe-toggle"></div>
                                </div>
                                <div class="--pain-container-btn">
                                    <div class="--pain-container-btn-main">
                                        <span>Решение</span>
                                    </div>
                                    <div class="--pain-container-btn-scroll">
                                        <span>Решение</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 

            <div class="main_page-slider --mobile">
                <div class="main-block">
                    <div class="main-block-title">
                        <h1>Экосистема
                            цифровых сервисов 
                            для девелоперов,
                            <span>в которой есть все</span></h1>
                    </div>
                    <div class="main_page-slider-btn">
                        <span>Попробовать бесплатно</span>
                    </div>
                    <div class="main-block-content-menu">
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
                </div>

                <div class="main-block-background"></div>

                <div class="video-block">
                    <div class="video-block-item">
                        <h1 class="video-block-item-title">
                            Создайте и наполните свой объект недвижимости 
                            <br><span>в одно касание</span>
                        </h1>
                        <div class="video-block-item-btn">
                            <span>Попробовать бесплатно</span>
                        </div>
                        <div class="video-block-item-wrapper">
                            <div class="video-block-item-wrapper-video">
                                <video loop muted poster="{{ asset('images/pages/video_preloader.jpg') }}">
                                    <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                                    Видео не поддерживается вашим браузером.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="video-block-item">
                        <h1 class="video-block-item-title">
                            Интерактивный генплан и каталог для сайта <span>за 15 минут</span><br>без кода и сложных инструкций
                        </h1>
                        <div class="video-block-item-btn">
                            <span>Попробовать бесплатно</span>
                        </div>
                        <div class="video-block-item-wrapper">
                            <div class="video-block-item-wrapper-video">
                                <video loop muted poster="{{ asset('images/pages/video_preloader.jpg') }}">
                                    <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                                    Видео не поддерживается вашим браузером.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="video-block-item">
                        <h1 class="video-block-item-title">
                            Настройте фиды во все агрегаторы<br><span>в одно касание</span>
                        </h1>
                        <div class="video-block-item-btn">
                            <span>Попробовать бесплатно</span>
                        </div>
                        <div class="video-block-item-wrapper">
                            <div class="video-block-item-wrapper-video">
                                <video loop muted poster="{{ asset('images/pages/video_preloader.jpg') }}">
                                    <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                                    Видео не поддерживается вашим браузером.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="video-block-item">
                        <h1 class="video-block-item-title">
                            <span>Меняйте цены хоть каждую <br class="--br-mobile">минуту</span>&nbsp;&mdash; они изменятся везде: <br class="--br-no-mobile">на&nbsp;сайте, в&nbsp;прайсах, в&nbsp;фидах
                        </h1>
                        <div class="video-block-item-btn">
                            <span>Попробовать бесплатно</span>
                        </div>
                        <div class="video-block-item-wrapper">
                            <div class="video-block-item-wrapper-video">
                                <video loop muted poster="{{ asset('images/pages/video_preloader.jpg') }}">
                                    <source src="{{ asset('video/main_video.mp4') }}" type="video/mp4">
                                    Видео не поддерживается вашим браузером.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="main_page-btn">
                <span>Рассказать о своей боли</span>
            </div>

            <div class="main_page-cards">
                <div class="main_page-card">
                    <div class="main_page-card-wrapper">
                        <div class="main_page-card-content">
                            <p class="main_page-card-content-text">
                                При изменении цен необходимо
                                их&nbsp;менять во&nbsp;всех системах и&nbsp;на&nbsp;всех
                                платформах, притом время, которое
                                могло быть потрачено на&nbsp;более
                                важные задачи безвозвратно уходит
                                на&nbsp;мартышкин труд
                            </p>
                            <div class="main_page-card-content-images">
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <p class="main_page-card-content-images-wrapper-item-text">
                                            Изменить<br>цену
                                        </p>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <p class="main_page-card-content-images-wrapper-item-text">
                                            Изменить<br>цену
                                        </p>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <p class="main_page-card-content-images-wrapper-item-text">
                                            Изменить<br>цену
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="main_page-card-title">
                            В&nbsp;<span>smart plan</span> массовое изменение цен<br>одним нажатием: в&nbsp;каталоге, в&nbsp;фидах, в&nbsp;прайслисте
                        </p>
                    </div>
                </div>

                <div class="main_page-card">
                    <div class="main_page-card-wrapper">
                        <div class="main_page-card-content">
                            <p class="main_page-card-content-text">
                                Отсутствие синхронизации между 
                                сервисами и&nbsp;раздельное хранение 
                                данных приводит к&nbsp;несоответствию 
                                информации, а&nbsp;также затрудняет 
                                доступ к&nbsp;актуальным и&nbsp;точным 
                                данным
                            </p>
                            <div class="main_page-card-content-images">
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="15.3145" y="0.274414" width="2.02168" height="20.2168" transform="rotate(45 15.3145 0.274414)" fill="#1E69FE"/>
                                            <rect width="2.02168" height="20.2168" transform="matrix(-0.707106 0.707107 0.707107 0.707106 2.17383 0.274414)" fill="#1E69FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.992 3.99926C17.7737 3.99926 17.5557 4.01147 17.3388 4.03589C15.7005 0.532628 11.5324 -0.979254 8.02914 0.659078C5.86415 1.67155 4.36499 3.71831 4.05293 6.08794C1.34093 6.60632 -0.437296 9.22501 0.0810059 11.9369C0.531576 14.2943 2.59366 15.9988 4.99368 15.9977H17.992C21.3053 15.9977 23.9912 13.3118 23.9912 9.99853C23.9912 6.68524 21.3053 3.99926 17.992 3.99926ZM17.992 13.9979H4.99368C3.33703 13.9979 1.99404 12.6549 1.99404 10.9983C1.99404 9.34164 3.33703 7.99865 4.99368 7.99865C5.65173 7.99611 6.29161 8.21435 6.81086 8.61855C7.25365 8.94849 7.88009 8.85699 8.21002 8.4142C8.53095 7.98347 8.45421 7.37614 8.03627 7.03879C7.45983 6.59535 6.79204 6.28576 6.08115 6.13242C6.55752 3.41497 9.14663 1.59815 11.8641 2.07452C13.6926 2.39508 15.1926 3.70312 15.7588 5.47103C15.9125 5.96578 15.9912 6.48074 15.9922 6.99882C15.9922 7.55106 16.4398 7.99873 16.9921 7.99873C17.5443 7.99873 17.992 7.55106 17.992 6.99882C17.9901 6.66584 17.9647 6.33343 17.9161 6.00408C17.9414 6.00357 17.9667 5.99899 17.992 5.99899C20.2009 5.99899 21.9914 7.78965 21.9914 9.99846C21.9914 12.2073 20.2008 13.9979 17.992 13.9979Z" fill="#1E69FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.9064 2.7125H18.9062H10.6203L8.70388 0.796144C8.70387 0.79614 8.70387 0.796136 8.70387 0.796132C8.55036 0.642583 8.34214 0.556296 8.12502 0.55625H8.125L3.09375 0.55625L3.09364 0.55625C2.49548 0.556907 1.922 0.794818 1.49903 1.21778C1.07607 1.64075 0.838157 2.21423 0.8375 2.81239V2.8125L0.8375 17.1875L0.8375 17.1876C0.838157 17.7858 1.07607 18.3593 1.49903 18.7822C1.922 19.2052 2.49548 19.4431 3.09364 19.4438H3.09375H18.9062H18.9064C19.5045 19.4431 20.078 19.2052 20.501 18.7822C20.9239 18.3593 21.1618 17.7858 21.1625 17.1876V17.1875V4.96875V4.96864C21.1618 4.37048 20.9239 3.797 20.501 3.37403C20.078 2.95107 19.5045 2.71316 18.9064 2.7125ZM19.525 4.96888V6.39987C19.3247 6.3399 19.1168 6.30832 18.9072 6.30625H18.9062L3.09375 6.30625L3.09277 6.30625C2.88324 6.30832 2.67528 6.3399 2.475 6.39987L2.475 2.81263C2.475 2.8126 2.475 2.81257 2.475 2.81254C2.47524 2.6485 2.5405 2.49125 2.6565 2.37525C2.7725 2.25925 2.92975 2.19399 3.09379 2.19375C3.09382 2.19375 3.09385 2.19375 3.09388 2.19375L7.78595 2.19375L9.70237 4.11011C9.85588 4.26366 10.0641 4.34995 10.2812 4.35H10.2812H18.9061C19.0702 4.35021 19.2275 4.41548 19.3435 4.5315C19.4595 4.64752 19.5248 4.80481 19.525 4.96888ZM19.525 17.1874C19.5248 17.3514 19.4595 17.5087 19.3435 17.6247C19.2275 17.7408 19.0702 17.806 18.9061 17.8062H3.09388C2.92981 17.806 2.77252 17.7408 2.6565 17.6247C2.5405 17.5088 2.47524 17.3515 2.475 17.1875C2.475 17.1874 2.475 17.1874 2.475 17.1874V8.56263C2.475 8.5626 2.475 8.56257 2.475 8.56254C2.47524 8.3985 2.5405 8.24125 2.6565 8.12525C2.77252 8.00923 2.92981 7.94396 3.09388 7.94375H18.9061C19.0702 7.94396 19.2275 8.00923 19.3435 8.12525C19.4595 8.24127 19.5248 8.39856 19.525 8.56263V17.1874Z" fill="#1E69FE" stroke="#1E69FE" stroke-width="0.2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="main_page-card-title">
                            В&nbsp;<span>smart-plan</span> все сервисы синхронизированы,<br>
                            данные хранятся в&nbsp;одной базе и&nbsp;всегда под рукой
                        </p>
                    </div>
                </div>

                <div class="main_page-card">
                    <div class="main_page-card-wrapper">
                        <div class="main_page-card-content">
                            <p class="main_page-card-content-text">
                                Зависимость от&nbsp;подрядчиков, 
                                невозможность самостоятельного 
                                внесения изменений, долгое 
                                ожидание правок, необходимость 
                                постоянно составлять ТЗ. Намного 
                                проще внести изменения самому...
                            </p>
                            <div class="main_page-card-content-images">
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="14.5703" y="0.274414" width="2.02168" height="20.2168" transform="rotate(45 14.5703 0.274414)" fill="#1D2848"/>
                                            <rect width="2.02168" height="20.2168" transform="matrix(-0.707106 0.707107 0.707107 0.707106 1.42969 0.274414)" fill="#1D2848"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="14.5703" y="0.274414" width="2.02168" height="20.2168" transform="rotate(45 14.5703 0.274414)" fill="#1D2848"/>
                                            <rect width="2.02168" height="20.2168" transform="matrix(-0.707106 0.707107 0.707107 0.707106 1.42969 0.274414)" fill="#1D2848"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="main_page-card-title">
                            С&nbsp;помощью <span>smart-plan</span> можно вносить любые изменения<br>
                            самостоятельно без знания кода и&nbsp;сложных инструкций
                        </p>
                    </div>
                </div>

                <div class="main_page-card">
                    <div class="main_page-card-wrapper">
                        <div class="main_page-card-content">
                            <p class="main_page-card-content-text">
                                У&nbsp;большой части компаний 
                                нет возможности визуальной
                                демонстрации строящихся 
                                объектов из-за сложности 
                                и&nbsp;дороговизны разработки 
                                подобных решений
                            </p>
                            <div class="main_page-card-content-images">
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <p class="main_page-card-content-images-wrapper-item-text">
                                            3
                                        </p>
                                    </div>
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                    <div class="main_page-card-content-images-wrapper-item"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <p class="main_page-card-content-images-wrapper-item-text">
                                            3
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="main_page-card-title">
                            Благодаря <span>smart-plan</span> можно создать визуальную<br>
                            демонстрацию буквально за&nbsp;30&nbsp;минут
                        </p>
                    </div>
                </div>

                <div class="main_page-card">
                    <div class="main_page-card-wrapper">
                        <div class="main_page-card-content">
                            <p class="main_page-card-content-text">
                                Проблема с&nbsp;контролем 
                                статусов имеющихся в&nbsp;продаже лотов. 
                                Объекты размещены на&nbsp;разных 
                                площадках, забронированный 
                                объект числится свободным, 
                                а&nbsp;на&nbsp;самом деле давно продан
                            </p>
                            <div class="main_page-card-content-images">
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.378788" width="1.46431" height="8.46431" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.14622 4.45469)" fill="#1D2848" stroke="#1D2848" stroke-width="0.535687"/>
                                            <rect x="15.6064" y="0.378788" width="1.46431" height="14.4643" transform="rotate(45 15.6064 0.378788)" fill="#1D2848" stroke="#1D2848" stroke-width="0.535687"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="14.5703" y="0.274414" width="2.02168" height="20.2168" transform="rotate(45 14.5703 0.274414)" fill="#1D2848"/>
                                            <rect width="2.02168" height="20.2168" transform="matrix(-0.707106 0.707107 0.707107 0.707106 1.42969 0.274414)" fill="#1D2848"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="main_page-card-content-images-wrapper">
                                    <div class="main_page-card-content-images-wrapper-back"></div>
                                    <div class="main_page-card-content-images-wrapper-item">
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.81774 7.74107C5.0628 7.40714 4.99075 6.93778 4.65681 6.69271C4.52313 6.59461 4.36769 6.54731 4.21366 6.54731C3.98299 6.54731 3.75541 6.65339 3.60841 6.85364C2.293 8.64609 1.59766 10.7714 1.59766 12.9998C1.59766 15.7774 2.6793 18.3887 4.64336 20.3528C6.60742 22.3169 9.21878 23.3985 11.9964 23.3985C13.6735 23.3985 15.292 23.0049 16.7539 22.2496L16.27 24.0557C16.1628 24.4558 16.4002 24.867 16.8003 24.9742C17.2003 25.0815 17.6117 24.844 17.7189 24.4439L18.668 20.9017C18.7195 20.7096 18.6925 20.5049 18.5931 20.3326C18.4937 20.1603 18.3298 20.0346 18.1377 19.9831L14.5954 19.034C14.1954 18.9268 13.7841 19.1642 13.6769 19.5643C13.5697 19.9644 13.8071 20.3756 14.2072 20.4828L15.983 20.9586C14.7545 21.5767 13.3994 21.8985 11.9964 21.8985C7.08958 21.8985 3.09766 17.9066 3.09766 12.9998C3.09766 11.0928 3.69245 9.2744 4.81774 7.74107Z" fill="#1E69FE"/>
                                            <path d="M3.60821 6.85349L3.54391 6.8063C2.21841 8.61251 1.51766 10.7544 1.51766 12.9998C1.51766 15.7986 2.60773 18.4303 4.58679 20.4094C6.56586 22.3884 9.19757 23.4785 11.9964 23.4785C13.6251 23.4785 15.1993 23.11 16.6303 22.4017L16.1927 24.035C16.0741 24.4777 16.3368 24.9329 16.7796 25.0515M3.60821 6.85349L16.726 22.3538L16.27 24.0557C16.1628 24.4558 16.4002 24.867 16.8003 24.9742C17.2003 25.0815 17.6117 24.844 17.7189 24.4439L18.668 20.9017M3.60821 6.85349L3.54392 6.8063C3.70662 6.58465 3.9586 6.46731 4.21366 6.46731C4.38414 6.46731 4.55627 6.5197 4.70414 6.62822C5.0737 6.89942 5.15343 7.41885 4.88223 7.7884L4.81774 7.74107L4.88223 7.78841C3.76705 9.30797 3.17766 11.1098 3.17766 12.9998C3.17766 17.8624 7.13376 21.8185 11.9964 21.8185C13.3146 21.8185 14.5897 21.5319 15.7557 20.9806M3.60821 6.85349L15.7557 20.9806M16.7796 25.0515L16.8003 24.9742L16.7796 25.0515C16.7796 25.0515 16.7796 25.0515 16.7796 25.0515ZM16.7796 25.0515C17.2223 25.1702 17.6775 24.9074 17.7961 24.4647L18.7453 20.9224L18.668 20.9017M18.668 20.9017L18.7453 20.9224C18.8023 20.7098 18.7724 20.4832 18.6624 20.2926L18.6624 20.2926C18.5523 20.1019 18.371 19.9629 18.1585 19.9059L18.1584 19.9059L14.6161 18.9567C14.1734 18.838 13.7182 19.1008 13.5996 19.5436C13.481 19.9864 13.7437 20.4415 14.1865 20.5601L15.7557 20.9806M18.668 20.9017C18.7195 20.7096 18.6925 20.5049 18.5931 20.3326C18.4937 20.1603 18.3298 20.0346 18.1377 19.9831L14.5954 19.034C14.1954 18.9268 13.7841 19.1642 13.6769 19.5643C13.5697 19.9644 13.8071 20.3756 14.2072 20.4828L15.7557 20.9806" stroke="#1E69FE" stroke-width="0.16"/>
                                            <path d="M20.7493 19.1961L20.6848 19.1488L20.7493 19.1961C20.4781 19.5656 19.9587 19.6454 19.5892 19.3742C19.2196 19.103 19.1399 18.5835 19.4111 18.214C20.5263 16.6944 21.1156 14.8926 21.1156 13.0026C21.1156 8.14001 17.1595 4.1839 12.2969 4.1839C10.981 4.1839 9.7051 4.47069 8.53836 5.022L10.1069 5.4423C10.5496 5.56094 10.8124 6.01604 10.6937 6.45885C10.5751 6.90162 10.1199 7.16451 9.67718 7.0457L6.13496 6.09653C5.69221 5.9779 5.4294 5.52275 5.5481 5.07998L6.49727 1.53774L6.57454 1.55845L6.49727 1.53774C6.59668 1.16684 6.93205 0.922367 7.29848 0.922367C7.36969 0.922367 7.44199 0.931618 7.51374 0.950827L7.51376 0.95083C7.95651 1.06947 8.21932 1.52461 8.10062 1.96738L7.66281 3.60123C9.09492 2.89284 10.6707 2.52385 12.2969 2.52385C15.0957 2.52385 17.7274 3.61392 19.7065 5.59299C21.6856 7.57205 22.7756 10.2038 22.7756 13.0026C22.7756 15.2479 22.0749 17.3898 20.7493 19.1961Z" fill="#1E69FE" stroke="#1E69FE" stroke-width="0.16"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="main_page-card-title">
                            Благодаря <span>smart-plan</span> можно создать визуальную<br>
                            демонстрацию буквально за&nbsp;30&nbsp;минут
                        </p>
                    </div>
                </div>

                <div class="main_page-cards-bg"></div>
            </div>

            <div class="main_page-horizontal">
                <div class="main_page-horizontal-wrap">
                    <h1 class="main_page-horizontal-title">
                        Бережем ваше<br>
                        время&nbsp;&mdash; <span>настроим<br>
                        все за&nbsp;вас</span>
                    </h1>
                    <div class="main_page-horizontal-block">
                        <div class="main_page-horizontal-block-wrapper">
                            <div class="main_page-horizontal-block-wrapper-first">
                                <div class="main_page-horizontal-block-wrapper-num">
                                    <span>01</span>
                                </div>
                                <div class="main_page-horizontal-block-wrapper-item --blue">
                                    <span>Внедрение</span>
                                </div>
                                <div class="main_page-horizontal-block-wrapper-content">
                                    <div class="main_page-horizontal-block-wrapper-content-item">
                                        <h1 class="main_page-horizontal-block-wrapper-content-item-title">
                                            Аудит
                                        </h1>
                                        <p class="main_page-horizontal-block-wrapper-content-item-text">
                                            Проблема с&nbsp;контролем<br>
                                            статусов имеющихся<br>
                                            в&nbsp;продаже лотов
                                        </p>
                                    </div>
                                    <div class="main_page-horizontal-block-wrapper-content-item">
                                        <h1 class="main_page-horizontal-block-wrapper-content-item-title">
                                            Настройка
                                        </h1>
                                        <p class="main_page-horizontal-block-wrapper-content-item-text">
                                            Проблема с&nbsp;контролем<br>
                                            статусов имеющихся<br>
                                            в&nbsp;продаже лотов
                                        </p>
                                    </div>
                                    <div class="main_page-horizontal-block-wrapper-content-item">
                                        <h1 class="main_page-horizontal-block-wrapper-content-item-title">
                                            Обучение
                                        </h1>
                                        <p class="main_page-horizontal-block-wrapper-content-item-text">
                                            Проблема с&nbsp;контролем<br>
                                            статусов имеющихся<br>
                                            в&nbsp;продаже лотов
                                        </p>
                                    </div>
                                </div>
                                <div class="main_page-horizontal-block-wrapper-item">
                                    <span>~ 5 дней</span>
                                </div>
                            </div>
                            <div class="main_page-horizontal-block-wrapper-second">
                                <div class="main_page-horizontal-block-wrapper-num">
                                    <span>02</span>
                                </div>
                                <div class="main_page-horizontal-block-wrapper-item --blue">
                                    <span>Бесплатная поддержка</span>
                                </div>
                                <div class="main_page-horizontal-block-wrapper-content">
                                    <div class="main_page-horizontal-block-wrapper-content-item">
                                        <h1 class="main_page-horizontal-block-wrapper-content-item-title">
                                            Помощь
                                        </h1>
                                        <p class="main_page-horizontal-block-wrapper-content-item-text">Не&nbsp;будем мучать вас ботами 
                                            с&nbsp;типовыми ответами. На&nbsp;ваши вопросы 
                                            ответит человек и&nbsp;поможет разобраться. 
                                            Если будет не&nbsp;понятно, сделаем за&nbsp;вас!</p>
                                    </div>
                                    <div class="main_page-horizontal-block-wrapper-content-item">
                                        <h1 class="main_page-horizontal-block-wrapper-content-item-title">
                                            Команда
                                        </h1>
                                        <div class="main_page-horizontal-block-wrapper-content-item-team">
                                            <div class="main_page-horizontal-block-wrapper-content-item-team-person"></div>
                                            <div class="main_page-horizontal-block-wrapper-content-item-team-person"></div>
                                            <div class="main_page-horizontal-block-wrapper-content-item-team-person"></div>
                                            <p class="main_page-horizontal-block-wrapper-content-item-team-num">+6</p>
                                        </div>
                                    </div>
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