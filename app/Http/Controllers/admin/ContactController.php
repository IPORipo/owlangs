<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    //
    public function index(){
        $file = file_get_contents(base_path() . '/resources/assets/sass/admin/admin-contact.json');
        $contact = json_decode($file, TRUE);
        return view('admin.pages.contact',['contact'=> $contact]);
    }
    
    public function updateAdmin(Request $request){
        
        $path = base_path() . '/resources/assets/sass/admin/admin-contact.json';
        chown(base_path() . '/resources/assets/sass/admin/admin-contact.json', 'guramsoselia');
        chmod(base_path() . '/resources/assets/sass/admin/admin-contact.json', 0777);
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
        file_put_contents($file, json_encode($contact));
        
        return redirect()->back();
    }
}