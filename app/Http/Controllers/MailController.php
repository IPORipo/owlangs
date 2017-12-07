<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Mail\Mailer;
use App\Mail\MyMail;
class MailController extends Controller
{
    public function send(Request $request,Mailer $mailer){
        $mailer ->to('gkvaratskhelia2@gmail.com')
                ->send(new Mymail($request->title,$request->email,$request->msg));
        return redirect()->back();
    }
}
