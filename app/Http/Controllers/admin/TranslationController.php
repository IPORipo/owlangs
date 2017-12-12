<?php

namespace App\Http\Controllers\admin;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TranslationController extends Controller
{
    //
      public function index(){
        //read the file
        $langs_en = include(base_path('resources/lang/en/en.php'));
        $langs_pl = include(base_path('resources/lang/pl/en.php'));
        return view('admin.pages.translations',['langs_en'=>$langs_en, 'langs_pl' => $langs_pl]);
        
    }
}
