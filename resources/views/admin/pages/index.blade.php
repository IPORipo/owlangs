@extends('admin.layouts.master')

@section('title')
  Dashboard
@endsection
   
@section('content')
  <div class="preloader">
        <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">Admin Pro</p>
        </div>
    </div>
    <div id="main-wrapper">
      
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">Dashboard</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <h3 class="card-title m-b-5"><span class="lstick"></span>User Visits (google analytics)</h3>
                                    </div>
                                    <div class="ml-auto">
                                        <select class="custom-select b-0">
                                            <option selected="">January 2017</option>
                                            <option value="1">February 2017</option>
                                            <option value="2">March 2017</option>
                                            <option value="3">April 2017</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="sales-overview2" class="p-relative" style="height:360px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><span class="lstick"></span>Visit Separation(google analytics)</h4>
                                <div id="visitor" style="height:250px; width:100%;"></div>
                                <table class="table vm font-14">
                                    <tr>
                                        <td class="b-0">Mobile</td>
                                        <td class="text-right font-medium b-0">38.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Tablet</td>
                                        <td class="text-right font-medium">30.8%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <h4 class="card-title"><span class="lstick"></span>Last registered</h4></div>
                                </div>
                                <div class="table-responsive m-t-20">
                                    <table class="table vm no-th-brd no-wrap pro-of-month">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($users as $user)
                                                <tr>
                                                    <td style="width:50px;"><span class="round"><img src="{{asset('images/users/1.jpg')}}" alt="user" width="50"></span></td>
                                                    <td>
                                                        <h6>{{ $user->name }}</h6><small class="text-muted">{{ $user->email }}</small></td>
                                                    <td>{{ $user->created_at->diffForHumans() }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- contact -->
                    <div class="col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <h4 class="card-title"><span class="lstick"></span>Last messages</h4>
                                </div>
                               <div class="table-responsive m-t-20">
                                    <table class="table vm no-th-brd no-wrap pro-of-month">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th >subject</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($messages as $message)
                                                <tr>
                                                    <td> 
                                                        <h6>{{ $message->name }}</h6><small class="text-muted">{{ $message->email }}</small></td>
                                                    <td>{{ $message->subject }}</td>
                                                    <td>{{ $message->created_at->diffForHumans() }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-xlg-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <h4 class="card-title"><span class="lstick"></span>Last reviews</h4>
                                </div>
                               <div class="table-responsive m-t-20">
                                    <table class="table vm no-th-brd no-wrap pro-of-month">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th >Review</th>
                                                <th>Stars</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($messages as $message)
                                                <tr>
                                                    <td> 
                                                        <h6>{{ $message->name }}</h6><small class="text-muted">{{ $message->email }}</small></td>
                                                    <td>{{ $message->subject }}</td>
                                                    <td>{{ $message->created_at->diffForHumans() }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <footer class="footer"> © 2017 Admin Pro by wrappixel.com </footer>
        </div>
    </div>
@endsection