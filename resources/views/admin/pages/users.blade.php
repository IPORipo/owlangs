@extends('admin.layouts.master')

@section('title')
  Users
@endsection

@section('content')


  <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">Users</h3>
                    </div>
                   
                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                    <!-- column -->
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <!-- <h4 class="card-title">Basic Table</h4> -->
                                <!-- <h6 class="card-subtitle">Add class <code>.table</code></h6> -->
                                <div class="table-responsive">
                                    <table class="table">
                                    <div class="table-header d-flex justify-content-start">
                                        <div class="form-group d-flex">
                                        <div class="col-sm-12 d-flex">
                                            <select class="form-control form-control-line">
                                                <option>Bulk Actions</option>
                                                <option>Spam</option>
                                                <option>Delete</option>
                                            </select>
                                            <button class="btn waves-effect waves-light btn-info ">Apply</button>
                                        </div>
                                        <div class="col-sm-12 d-flex">
                                            <select class="form-control form-control-line">
                                                <option>All Dates</option>
                                                <option>September 2017</option>
                                            </select>
                                            <button class="btn waves-effect waves-light btn-info ">Sort</button>
                                        </div>
                                    </div>
                                    </div>
                                        <thead>
                                            <tr>
                                                 <th>
                                                    <input type="checkbox" aria-label="Checkbox for following text input">
                                                </th>
                                                <th><a href="{{ route('users','desc') }}">#</a></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Registered</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          @foreach($users as $key => $user)
                                            <td> {{ $key+1 }}</td>
                                            <td> {{ $user->name }}</td>
                                            <td> {{ $user->email }}</td>
                                              @if($user->role_id = 1) 
                                                <td>Admin</td>
                                                @else 
                                                <td>User</td>
                                              @endif
                                            <td> {{ $user->created_at }}</td>
                                          @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                © 2017 Admin Pro by wrappixel.com
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>

@endsection