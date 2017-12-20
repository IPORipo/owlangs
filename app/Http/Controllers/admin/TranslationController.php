<?php

namespace App\Http\Controllers\admin;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
class TranslationController extends Controller
{
    //
    public function index(){
        return view('admin.pages.translations');
    }
    
    public function getTranslations(){
        $langs_en = include(base_path('resources/lang/en/en.php'));
        $langs_pl = include(base_path('resources/lang/pl/en.php'));
        $langs = array('en_langs' => $langs_en, 'pl_langs' => $langs_pl);
        
        return json_encode($langs);
    }
    
    public function saveTranslations(Request $request){
        $langs_obj = $request->json()->all();
        

            $string = "<?php return [ \n";
            foreach($langs_obj['en_langs'] as $key => $val) { 
                $string .= '"'. str_replace('"', "'", $key) .'"=>"'. str_replace('"', "'", $val).'",';
            } 
            $string .= "] ?>";
          $file = File::put(base_path() . '/resources/lang/en/en.php',$string); 

        return json_encode('123');
     } 
}