<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png">
    <title>Admin Pro Admin Template - The Ultimate Bootstrap 4 Admin Template</title>
    <link href="{{ asset('css/admin/style.css')}}" rel="stylesheet">
    <link href="{{asset('css/admin/dashboard.css')}}" rel="stylesheet">
    <link href="{{asset('css/admin/default-dark.css')}}" id="theme" rel="stylesheet">
    <title> Owlangs - @yield('title')</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{ asset('css/admin/custom.css') }}">
    @yield('styles')
</head>
<body>
    @include('admin.partials.header')
    @include('admin.partials.navbar')
    @yield('content')
    {{-- @include('admin.partials.footer') --}}
    @yield('scripts')


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <script src="{{asset('js/admin/jquery-perfect-scrollbar.min.js')}}"></script>
    <script src="{{asset('js/admin/wave.js')}}"></script>
    <script src="{{asset('js/admin/sidebarmenu.js')}}"></script>
    <script src="{{asset('js/admin/custom.min.js')}}"></script>
    <script src="{{asset('js/admin/dashboard.js')}}"></script>

</body>
</html>