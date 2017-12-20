<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['user_id','pinned','text','rate'];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
