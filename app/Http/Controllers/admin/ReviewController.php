<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Reviews;
use App\User;

class ReviewController extends Controller
{
    //
    public function index(){
        // dd(User::find(1)->reviews);
        return view('admin.pages.reviews');
    }
}