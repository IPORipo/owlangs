<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    //
    protected $fillable = [
    'stars', 'pinned_to_testimonial', 'reviw_text'
    ];
    public function user(){
        return $this->belongsTo(App\User);
    }
}