<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    //

    // list all users 
    public function getUsers(){
        $user = new User();
        $users =  $user->getAllUsers();
        return view('admin.pages.users',['users' => $users]);
    }
}
