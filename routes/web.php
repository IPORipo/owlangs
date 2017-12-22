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
use Illuminate\Http\Request;

Route::group(['prefix' => LaravelLocalization::setLocale()], function (){
    Route::get('/', function () {
        return view('pages.home');
    })->name('home');
    Route::get('user', function () {
        // return view('pages.home');
        return File::get(base_path() . '/public/user/index.html');
    })->name('user');
    
    Route::get('/contact','admin\ContactController@getContact')->name('usercontact');
    
    Route::get('/privacy-policy', function(){
        return view('pages.privacy-policy');
    })->name('privacy-policy');
    
    Route::get('/terms-and-conditions', function(){
        return view('pages.terms-and-conditions');
    })->name('terms-and-conditions');
    
    Route::group(['middleware' => ['admin']], function () {
        
        Route::group(['prefix' => 'admin'],function() {
            // admin routes
            Route::get('/','admin\DashboardController@index')->name('admin');
            
            //user routes
            Route::get('/users','admin\UsersController@getUsers')->name('users');
            //contact routes
            Route::get('/contact','admin\ContactController@index')->name('contact');
            Route::post('/contact-update-admin-info','admin\ContactController@updateAdmin')->name('updateAdmin');
            Route::post('/deletecontact','admin\ContactController@delete')->name('deletecontact');
            Route::get('/getcontact','admin\ContactController@getContact')->name('getcontact');            
            // translation routes
            Route::get('/translations','admin\TranslationController@index')->name('translations');
            Route::get('/translations-get-translations','admin\TranslationController@getTranslations')->name('translationsGetTranslations');
            //review
            Route::get('/user-reviews','admin\ReviewController@index')->name('user_reviews');
            Route::post('/review_pinned','admin\ReviewController@change')->name('review_pinned');
        });
    });
});

Route::get('/addcontact','admin\ContactController@addContact')->name('addcontact');

Route::get('/logout',function(){
    Auth::logout();
    return redirect()->route('home');
})->name('logout');

Route::get('/sendmail','MailController@send')->name('sendmail');

Auth::routes();