<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contact;
class ContactController extends Controller
{
    public function index(){
        $messages = Contact::limit(10)->get();
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
        
        return redirect()->back();
    }
    public function delete(Request $request){
        $result = $request->result;
        for($i = 0; $i < count($result) ; $i++){
            Contact::find($result[$i])->delete();
        }
    }
    public function getContact(Request $request){
        $month = $request->month;
        $i = $request->i;
        if($month == 13)
            $contacts = Contact::skip($i)->take(10)->get();
        else
            $contacts = Contact::whereMonth('created_at',$month)->skip($i)->take(10)->get();
        foreach($contacts as $contact){
            $contact->readable = $contact->created_at->diffForHumans();
        }
        return json_encode($contacts);
    }
}