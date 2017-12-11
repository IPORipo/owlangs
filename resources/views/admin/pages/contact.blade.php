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
                        <h3 class="text-themecolor">Contact</h3>
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
                                
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Messages</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Contact Information</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="table-responsive">
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
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" aria-label="Checkbox for following text input">
                                                </th>
                                                <th><a href="{{ route('contact') }}">#</a></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                                </div>
                               
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <form class="form-horizontal form-material" action="{{ route('updateAdmin') }}" method="post"> 
                                    <div class="form-group">
                                        <label class="col-md-12">Admin mail</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="admin@mail.com" class="form-control form-control-line" name="email" value={{ $contact['admin-mail'] }}>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Company Name</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="company name" class="form-control form-control-line" name="company-name" id="example-email" value="{{ $contact['company-name'] }}">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Address</label>
                                        <div class="col-md-12">
                                            <input type="text" name="address" placeholder="address" class="form-control form-control-line" value="{{ $contact['address'] }}">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Tax Number</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="Tax Number" name="tax" class="form-control form-control-line" value="{{ $contact['tax'] }}">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Phone</label>
                                        <div class="col-md-12">
                                            <input type="text"  name="phone" placeholder="phone" class="form-control form-control-line" value="{{ $contact['phone'] }}">
                                            {{ csrf_field() }}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button class="btn btn-success" type="submit">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                                </div>
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