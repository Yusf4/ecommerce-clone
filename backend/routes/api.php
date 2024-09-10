<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Http\Controllers\MyauthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['api'])->group(function () {
   
    Route::get('/registertest',[MyauthController::class,'testRegister'])->name('register');
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}',[ProductController::class,'show']);
    Route::get('/categories',[CategoryController::class,'index']);
    Route::get('/categories/{id}',[CategoryController::class,'show']);
    Route::get('/search/products/{query}',[ProductController::class,'search']);
    Route::post('/register',[MyauthController::class,'register']);
    Route::post('/testLogin',[MyauthController::class,'login']);
    Route::post('/logout',[MyauthController::class,'logout']);
    Route::get('/user',[MyauthController::class,'user'])->middleware('auth:sanctum');

});


/*
Route::post('products','ProductController@store');
Route::put('products/{id}','ProductController@update');
Route::delete('products/{id}','ProductController@destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
