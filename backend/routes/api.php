<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

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
Route::middleware('api')->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}',[ProductController::class,'show']);
    Route::get('/categories/{id}',[CategoryController::class,'index']);

});


/*
Route::post('products','ProductController@store');
Route::put('products/{id}','ProductController@update');
Route::delete('products/{id}','ProductController@destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
