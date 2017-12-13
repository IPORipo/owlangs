<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contact;
class ContactController extends Controller
{
    public function index(){
        $messages = Contact::paginate(1);
        $file = file_get_contents(base_path() . '/resources/assets/sass/admin/admin-contact.json');
        $contact = json_decode($file, TRUE);
        return view('admin.pages.contact',['contact'=> $contact,'messages' => $messages]);
    }

    public function addContact(Request $request){
        Contact::Create(['name'=> $request->name ,'subject'=>$request->subject,'email'=>$request->email,'message'=>$request->msg]);
        return redirect('contact');
    }
    
    public function updateAdmin(Request $request){
        $path = base_path('/resources/assets/sass/admin/admin-contact.json');
        $file = file_get_contents($path);
        
        $contact = json_decode($file, TRUE);
        
        $email = $request->input('email');
        $company_name = $request->input('company-name');
        $address = $request->input('address');
        $tax = $request->input('tax');
        $phone = $request->input('phone');
        
        $contact['admin-mail'] = $email;
        $contact['company-name'] = $company_name;
        $contact['address'] = $address;
        $contact['tax'] = $tax;
        $contact['phone'] = $phone;
        file_put_contents($path, json_encode($contact));
        
        //set mail reciever in app env;

        return redirect()->back();
    }

    public function getContact(){
        $file = file_get_contents(base_path() . '/resources/assets/sass/admin/admin-contact.json');
        $contact = json_decode($file, TRUE);
        return view('pages.contact',['contact'=>$contact]);
    }
}