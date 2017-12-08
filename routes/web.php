<?php

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

Route::group(['prefix' => LaravelLocalization::setLocale()], function (){
    Route::get('/', function () {
        return view('pages.home');
    })->name('home');
    
    Route::get('/contact',function(){
        return view('pages.contact');
    });
    Route::get('/privacy-policy', function(){
        return view('pages.privacy-policy');
    });
    Route::get('/terms-and-conditions', function(){
        return view('pages.terms-and-conditions');
    });
    Route::get('/admin', function(){
        return view('admin.pages.index');
    });
    
});

Route::get('/sendmail','MailController@send')->name('sendmail');

Auth::routes();

Route::get('/auth', 'HomeController@index')->name('auth');

Route::group(['middleware' => ['admin']], function () {
    Route::get('/admin',function(){
        echo 'cong your life has mean';
    });
});