<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

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

Route::get('/', function () {
    return view('child');
});

Route::get('/listbarang', [Controller::class, 'listBarang'])->middleware('auth');
Route::post('/listbarang/createbarang', [Controller::class, 'prosesCreateBarang']);
Route::put('/listbarang/updatebarang', [Controller::class, 'prosesUpdateBarang']);
Route::get('/listbarang/deletebarang/{id}', [Controller::class, 'prosesDeleteBarang']);
Route::Delete('/listbarang/deletebarangform/{id}', [Controller::class, 'prosesDeleteBarang']);


Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
