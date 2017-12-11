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
    })->name('privacy-policy');
    Route::get('/terms-and-conditions', function(){
        return view('pages.terms-and-conditions');
    })->name('terms-and-conditions');
    Route::group(['middleware' => ['admin']], function () {
        
        Route::group(['prefix' => 'admin'],function(){
            // admin routes
            Route::get('/',function(){
                return view('admin.pages.index');
            })->name('admin');
            
            //user routes  
            Route::get('/users','admin\UsersController@getUsers')->name('users');
            //contact routes
            Route::get('/contact','admin\ContactController@index')->name('contact');
            Route::post('//contact-update-admin-info','admin\ContactController@updateAdmin')->name('updateAdmin');
            
            // translation routes
            Route::get('/translations',function(){
               return view('admin.pages.translations');
            })->name('translations');
            
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