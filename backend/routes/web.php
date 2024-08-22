<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MyauthController;
use App\Http\Controllers\ContactController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[ProductController::class,'index']);
Route::get('/contact',[ContactController::class,'index']);
Route::get('/login',[MyauthController::class,'showLoginForm']);
Route::get('/register',[MyauthController::class,'showRegisterForm'])->name('register');
require __DIR__.'/auth.php';
