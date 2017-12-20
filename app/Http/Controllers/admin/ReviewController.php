<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Review;

class ReviewController extends Controller
{
    public function index(){
        $reviews = Review::all();
        return view('admin.pages.reviews',compact('reviews'));
    }
    public function change(Request $request){
        $review =  Review::find($request->id);
        $review->pinned = $request->pinned;
        $review->save();
    }
}