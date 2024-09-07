<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MyauthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;

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

Route::get('products/{id}',[ProductController::class,'show']);
Route::get('/categories/{id}',[CategoryController::class,'show']);
Route::get('/',[ProductController::class,'index']);
Route::get('/categories',[CategoryController::class,'index']);
Route::get('/contact',[ContactController::class,'index']);
Route::post('/testLogin',[MyauthController::class,'testLogin'])->name('login');
Route::get('/registertest',[MyauthController::class,'testRegister'])->name('register');
require __DIR__.'/auth.php';
