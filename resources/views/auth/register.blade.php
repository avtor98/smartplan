@extends('layouts.app')

@section('content')
    <section class="section">
        <div class="section-blur-1"></div>
        <div class="section-blur-2"></div>
        <div class="section-blur-3"></div>
        <div class="section-container">
            <div class="section-left">
                <div class="smart-plan--wrapper">
                    <div class="smart-plan__icon" id="main-logo"></div>
                    <div class="smart-plan__info" id="phone-form">
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
                                <a>Регистрируясь вы подтверждаете, что принимаете <ins>Пользовательское соглашение,</ins> даете <ins>Поручение</ins> и <ins>Согласие на обработку персональных данных</ins></a>
                            </div>
                        </div>
                        <div class="smart-plan__button" id="get-code-btn">
                            <a class="smart-plan__item-btn">Получить код</a>
                        </div>
                        <div class="smart-plan__subtext--small">
                            <p>Уже есть аккаунт? <span>Войти</span></p>
                        </div>
                    </div>

                    <div class="smart-plan__info smart-plan__code hidden slide-out" id="sms-form" >
                        <div class="smart-plan__title">
                            <h1>Введите код из SMS</h1>
                        </div>
                        <div class="smart-plan__subtext">
                            <p>Код</p>
                        </div>
                        <div class="smart-plan__fieldset">
                            <label class="smart-plan__box"><input class="smart-plan__box-input" type="text" placeholder="" maxlength="1" id="code-input-1" /></label>
                            <label class="smart-plan__box"><input class="smart-plan__box-input" type="text" placeholder="" maxlength="1" id="code-input-2" /></label>
                            <label class="smart-plan__box"><input class="smart-plan__box-input" type="text" placeholder="" maxlength="1" id="code-input-3" /></label>
                            <label class="smart-plan__box"><input class="smart-plan__box-input" type="text" placeholder="" maxlength="1" id="code-input-4" /></label>
                        </div>
                        <div class="smart-plan__button" id="submit-code-btn">
                            <a class="smart-plan__item-btn">Отправить код</a>
                        </div>
                        <div class="smart-plan__subtext--small">
                            <p>Уже есть аккаунт? <span>Войти</span></p>
                        </div>
                    </div>

                    <div class="smart-plan__info smart-plan__forms hidden slide-in" id="register-form">
                        <div class="smart-plan__title">
                            <h1>Введите личные данные</h1>
                        </div>
                        <div class="smart-plan__subtext">
                            <p>По указанным данным будет<br>создана учетная запись в Smart-plan</p>
                        </div>
                        <form autocomplete="off">
                            <div class="smart-plan__form-group">
                                <input type="text" placeholder="Ф.И.О" class="smart-plan__item-text" id="name-data" autocomplete="off">
                                <input type="email" placeholder="Почта" class="smart-plan__item-text" id="email-data" autocomplete="off">
                                <div class="smart-plan__form-container">
                                    <input type="password" placeholder="Пароль" class="smart-plan__item-text" id="password-data" autocomplete="new-password">
                                    <div id="password-hint" class="smart-plan__password-hint">
                                        <div class="smart-plan__password-check">
                                            <label class="smart-plan__password-check--item not-passed"></label>
                                            <p id="length-check">Пароль состоит из менее 8 символов</p>
                                        </div>
                                        <div class="smart-plan__password-check">
                                            <label class="smart-plan__password-check--item not-passed"></label>
                                            <p id="uppercase-check">Пароль должен содержать хотя бы одну заглавную букву</p>
                                        </div>
                                        <div class="smart-plan__password-check">
                                            <label class="smart-plan__password-check--item not-passed"></label>
                                            <p id="number-check">Пароль должен содержать хотя бы одну цифру</p>
                                        </div>
                                        <div class="smart-plan__password-check">
                                            <label class="smart-plan__password-check--item not-passed"></label>
                                            <p id="special-check">Пароль должен содержать хотя бы один спецсимвол</p>
                                        </div>
                                    </div>
                                </div>
                                <input type="password" placeholder="Подтвердите пароль" class="smart-plan__item-text" id="password-confirm-data" autocomplete="new-password">
                            </div>
                        </form>
                        <div class="smart-plan__button" id="get-code-btn">
                            <a class="smart-plan__item-btn">Зарегестрироваться</a>
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
                            <div class="smart-plan__carousel-nav-item" data-index="0">
                                <svg class="progress-ring" width="20" height="20">
                                    <circle class="progress-ring__circle" stroke="#FF663D" stroke-width="4" fill="transparent" r="8" cx="10" cy="10"/>
                                </svg>
                            </div>
                            <div class="smart-plan__carousel-nav-item" data-index="1">
                                <svg class="progress-ring" width="20" height="20">
                                    <circle class="progress-ring__circle" stroke="#FF663D" stroke-width="4" fill="transparent" r="8" cx="10" cy="10"/>
                                </svg>
                            </div>
                            <div class="smart-plan__carousel-nav-item" data-index="2">
                                <svg class="progress-ring" width="20" height="20">
                                    <circle class="progress-ring__circle" stroke="#FF663D" stroke-width="4" fill="transparent" r="8" cx="10" cy="10"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="smart-plan__carousel-images">
                    <div class="smart-plan__carousel-image" data-index="0">
                        <img src="{{ asset('') }}" alt="Image 1">
                    </div>
                    <div class="smart-plan__carousel-image" data-index="1">
                        <img src="{{ asset('') }}" alt="Image 2">
                    </div>
                    <div class="smart-plan__carousel-image" data-index="2">
                        <img src="{{ asset('') }}" alt="Image 3">
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
