@extends('layouts.app')

@section('title')
    SmartPlan
@endsection

@section('content')
    @include('include.header')

    <section class = "l-main main_page">
        <div class="l-main-wrapper first_block --overflow">
            <div class="first_block-content">
                <div class="first_block-content-left">
                    <p class="first_block-content-left-des">Для МКД и ИЖС</p>
                    <h1 class="first_block-content-left-title">
                        Экосистема<br>
                        цифровых сервисов<br>
                        для девелоперов
                    </h1>
                    <div class="first_block-content-left-form">
                        <form id="phone-form">
                            <div class="first_block-content-left-form-container">
                                <input type="text" class="form-input-text" name="name" placeholder="Имя" required>

                                <div class="smart-plan__input">
                                    <div class="smart-plan__input-label" id="country-selector">
                                        <div class="smart-plan__input-flag" id="selected-flag" style="background-image: url('{{ asset('images/country/ru.svg') }}');"></div>
                                        <div class="smart-plan__input-num" id="selected-code">+7</div>
                                    </div>
                                    <div class="smart-plan__input-container">
                                        <input type="tel" placeholder="(000) 000-00-00" id="phone-input">
                                    </div>
                                    <div class="smart-plan__phone-dropdown" id="country-dropdown-main">
                                        <div class="smart-plan__phone-dropdown-items" id="country-dropdown"></div>
                                    </div>
                                </div>

                                <input type="tel" class="form-input-text phone" placeholder="+7 (_ _ _) _ _ _  _ _-_ _" id="phone-input-mobile">
                            </div>

                            <div id="btn_open_form" class="first_block-content-left-form-btn">
                                <span>Записаться на демо</span>
                            </div>
                            <button class="form-input-btn">
                                <span>Записаться на демо</span>
                            </button>
                            <p class="first_block-content-left-form-rules">
                                Нажимая кнопку &laquo;Записаться на&nbsp;демо&raquo;, вы&nbsp;даете согласие на&nbsp;обработку ваших персональных данных
                            </p>
                        </form>
                    </div>
                </div>
                <div class="first_block-content-menu">
                    <a href="/" class="first_block-content-menu-link">
                        <div class="first_block-content-menu-link-image __manage"></div>
                        <p>Управление<br>объектами</p>
                    </a>
                    <a href="/" class="first_block-content-menu-link ">
                        <div class="first_block-content-menu-link-image __genplan"></div>
                        <p>Интерактивный<br>генплан</p>
                    </a>
                    <a href="/" class="first_block-content-menu-link">
                        <div class="first_block-content-menu-link-image __fids"></div>
                        <p>Конструктор<br>ФИДов</p>
                    </a>
                    <a href="/" class="first_block-content-menu-link">
                        <div class="first_block-content-menu-link-image __reserve"></div>
                        <p>Online<br>бронирование</p>
                    </a>
                    <a href="/" class="first_block-content-menu-link">
                        <div class="first_block-content-menu-link-image __calc"></div>
                        <p>Калькулятор<br>ипотеки</p>
                    </a>
                    <a href="/" class="first_block-content-menu-link">
                        <div class="first_block-content-menu-link-image __all"></div>
                        <p>Все<br>решения</p>
                    </a>
                    <div class="first_block-content-menu-link-scroll"></div>
                </div>
            </div>
        </div>

        <div class="second_block">
            
        </div>
    </section>

@endsection