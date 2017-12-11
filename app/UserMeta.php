<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserMeta extends Model
{
    //
    
    
    public function role(){
        return $this->belongsTo(App\User);
    }

    
}