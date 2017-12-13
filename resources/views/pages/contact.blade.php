@extends('layouts.master')

@section('title')
    Contact
@endsection

@section('content')
    <div class="container-fluid" id="contact-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6 contact-form-block">  
                    <h1>Contact Us</h1>  
                    <form action="{{route('addcontact')}}" method="GET">

                        <input type="name" name="name" class="form-control" placeholder="@lang('name')">
                        <input type="email" name="email" class="form-control" placeholder="@lang('email')">
                        <input type="text" name="subject" class="form-control" placeholder="@lang('subject')">
                        <textarea name="msg" id="" class="form-control" cols="30" rows="10" placeholder="@lang('message')"></textarea>
                        <input type="submit" class="btn btn-primary">
                    </form>
                </div>
                <div class="col-md-6 contact-info-block">
                    <h4><span>@lang('en.Company name')</span>: {{ $contact['company-name'] }}.</h4>
                    <h4><span>@lang('en.address')</span>: {{ $contact['address'] }}</h4>
                    <img src="{{asset('images/center.jpg')}}" alt="">
                    <h4>NIP/tax @lang('en.identification number'): <strong>{{ $contact['tax'] }}</strong></h4>
                    <h4>@lang('en.How to contact us'):<br>@lang('en.phone'): <strong>{{ $contact['phone'] }}</strong><br>email: <strong><a href="mailto:office@newfuture.company">{{ $contact['admin-mail'] }}</a></strong>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9835876111247!2d17.03593531565198!3d51.108762979571715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27653413449%3A0x6facac676125681a!2zS3Jhd2llY2thIDMsIDUwLTE0OCBXcm9jxYJhdywg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sge!4v1512736102276" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
@endsection