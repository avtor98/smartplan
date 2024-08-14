<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return view('layouts/index');
});

Route::get('/index', function () {
    return view('layouts/index');
});

Route::get('/registration', [RegisterController::class, 'showRegistrationForm'])->name('registration');
Route::post('/registration', [RegisterController::class, 'register']);

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
