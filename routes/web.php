<?php

use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;
use App\Jobs\SendEmailJob;
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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('image/index', [ImageController::class, 'index']);
Route::post('image/upload', [ImageController::class, 'upload']);

Route::get('test/send-email', function(){
    $sendmail = 'ayungyung20@gmail.com';
    dispatch(new \App\Jobs\SendEmailJob($sendmail));
    dd('send email on progress...');
});


require __DIR__.'/auth.php';
