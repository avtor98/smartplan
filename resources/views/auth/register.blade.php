@extends('layouts.app')

@section('content')
    <section class="section">
        <div class="section-blur-1"></div>
        <div class="section-blur-2"></div>
        <div class="section-blur-3"></div>
        <div class="section-container">
            <div class="section-left">
                <div class="smart-plan--wrapper">
                    <div class="smart-plan__icon"></div>
                    <div class="smart-plan__info">
                        <div class="smart-plan__title">
                            <h1>Регистрация</h1>
                        </div>
                        <div class="smart-plan__subtext">
                            <p>Телефон</p>
                        </div>
                        <div class="smart-plan__input">
                            <div class="smart-plan__input-label" id="country-selector">
                                <div class="smart-plan__input-flag" id="selected-flag" style="background-image: url('{{ asset('images/country/ru.svg') }}');"></div>
                                <div class="smart-plan__input-num" id="selected-code">+7</div>
                            </div>
                            <div class="smart-plan__input-container">
                                <input type="tel" placeholder="(000) 000-00-00" class="smart-plan__item-input" id="phone-input">
                            </div>
                            <div class="smart-plan__phone-dropdown" id="country-dropdown-main">
                                <div class="smart-plan__phone-dropdown-items" id="country-dropdown"></div>
                            </div>
                        </div>
                        <div class="smart-plan__privacy">
                            <div class="smart-plan__privacy-checkbox">
                                <input type="checkbox" id="custom-checkbox">
                                <label for="custom-checkbox" class="custom-checkbox">
                                    <img src="{{ asset('images/svg/checkbox-input.svg') }}" alt="Unchecked" class="unchecked">
                                    <img src="{{ asset('images/svg/checkbox-checked.svg') }}" alt="Checked" class="checked">
                                </label>
                            </div>
                            <div class="smart-plan__privacy-text">
                                <a>Я принимаю <ins>договор-оферту</ins> и даю согласие на <ins>обработку персональный данных</ins></a>
                            </div>
                        </div>
                        <div class="smart-plan__button">
                            <a class="smart-plan__item-btn">Получить код</a>
                        </div>
                        <div class="smart-plan__subtext--small">
                            <p>Уже есть аккаунт? <span>Войти</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-right">
                <div class="smart-plan__carousel">
                    <div class="smart-plan__carousel-content">
                        <div class="smart-plan__carousel-icon">
                            <img src="{{ asset('images/svg/hand-touch-white.svg') }}" alt="Нажмите">
                        </div>
                        <div class="smart-plan__carousel-title">
                            <h1>Горячие клавиши:</h1>
                        </div>
                        <div class="smart-plan__carousel-subtitle">
                            <p id="carousel-text">Нажмите на клавишу <span id="carousel-key">P</span>, чтобы открыть инструмент «Разметка»</p>
                        </div>
                        <div class="smart-plan__carousel-nav">
                            <div class="smart-plan__carousel-nav-item" data-index="0"></div>
                            <div class="smart-plan__carousel-nav-item" data-index="1"></div>
                            <div class="smart-plan__carousel-nav-item" data-index="2"></div>
                        </div>
                    </div>
                </div>
                <div class="smart-plan__carousel-images">
                    <div class="smart-plan__carousel-image" data-index="0">
                        <img src="{{ asset('images/carousel/genplan.png') }}" alt="Image 1">
                    </div>
                    <div class="smart-plan__carousel-image" data-index="1">
                        <img src="{{ asset('images/carousel/genplan-1.jpg') }}" alt="Image 2">
                    </div>
                    <div class="smart-plan__carousel-image" data-index="2">
                        <img src="{{ asset('images/carousel/genplan-2.jpg') }}" alt="Image 3">
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
