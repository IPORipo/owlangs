<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contact;
class ContactController extends Controller
{
    public function index(){
        $contact = Contact::all();
        return view('admin.pages.contact',compact('contact'));
    }

    public function addContact(Request $request){
        Contact::Create(['name'=> $request->name ,'subject'=>$request->subject,'email'=>$request->email,'message'=>$request->msg]);
        return redirect('contact');
    }
}