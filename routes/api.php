<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServicesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[AuthController::class, 'register']);
Route::post('login',[AuthController::class, 'login']);
Route::post('logout',[AuthController::class, 'logout']);
Route::post('myProducts',[AuthController::class, 'getProducts']);
Route::post('myServices',[AuthController::class, 'getServices']);
Route::get('searchProducts/{name}',[ProductController::class, 'search']);
Route::get('searchServices/{name}',[ServicesController::class, 'search']);


//products route
Route::resource('products', ProductController::class);

//Services route
Route::resource('services', ServicesController::class);

//updating the product
Route::post('update-product',[ ProductController::class, 'updateProduct']);

//updating the product
Route::post('update-service', [ServicesController::class, 'updateService']);

//protected routes group (post products, and services)
Route::group(['middleware' => ['auth:sanctum']], function(){

});
