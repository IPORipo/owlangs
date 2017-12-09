<?php

namespace App\admin;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    protected $table = 'users';

    public function getAllUsers(){
        return self::All();
    }
}
