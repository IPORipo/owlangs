<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Contact;

class DashboardController extends Controller
{
    public function index(){
        
        //get last registered users
        $users = User::orderBy('created_at','desc')->take(10)->get();
        $contact = Contact::orderBy('created_at','desc')->take(10)->get();
        //get last recieved messages
        return view('admin.pages.index',['users' => $users, 'messages' => $contact]);
    }
}
