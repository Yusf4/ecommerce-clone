<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MyauthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DebuggingController;
use App\Http\Controllers\DashboardController;

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
Route::get('/users',[DashboardController::class,'show']);
Route::post('/testLogin',[MyauthController::class,'login'])->name('login');
Route::get('/user',[MyauthController::class,'user']);
Route::get('/registertest',[MyauthController::class,'testRegister'])->name('register');
Route::get('/strapi',[DebuggingController::class,'creating']);
Route::post('/testLog',function(){
    return "hello world";
});
// Typically not needed to add manually as it's included by Sanctum
//Route::middleware('auth:sanctum')->post('/testLogout', [MyauthController::class, 'logout']);
//Route::post('/testLogout',[MyauthController::class,'logout']);
Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['message' => 'CSRF Cookie Set']);
});

require __DIR__.'/auth.php';
