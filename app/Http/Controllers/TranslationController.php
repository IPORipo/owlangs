<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TranslationController extends Controller
{
    //
    public function index(){
        //read the file
        if(App::isLocale('en')){
            $file = base_path('resources/lang/en/en.php');
        } else {
            $file = base_path('resources/lang/pl/en.php');
        }

        dd($file);

        
    }
}
