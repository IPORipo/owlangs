@extends('admin.layouts.master')

@section('title')
   Translations
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
                        <h3 class="text-themecolor">Translations</h3>
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
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">English</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Poland</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="table-responsive">
                                            <div class="table-header d-flex justify-content-start">
                                                <div class="form-group d-flex">
                                                <div class="col-sm-1 d-flex">
                                                    <button class="btn waves-effect waves-light btn-info ">Save</button>
                                                </div>
                                                <div class="col-sm-3 d-flex">
                                                    <select class="form-control form-control-line">
                                                        <option>Bulk Actions</option>
                                                        <option>Spam</option>
                                                        <option>Delete</option>
                                                    </select>
                                                    <button class="btn waves-effect waves-light btn-info ">Apply</button>
                                                </div>
                                                <div class="col-sm-3 d-flex">
                                                    <select class="form-control form-control-line">
                                                        <option>All Dates</option>
                                                        <option>September 2017</option>
                                                    </select>
                                                    <button class="btn waves-effect waves-light btn-info ">Sort</button>
                                                </div>
                                                <div class="col-sm-4 d-flex">
                                                  <input type="text" id="saerch-text" class="form-control" placeholder="search"> 
                                                </div>
                                            </div>
                                            </div>
                                            <div class="message-box contact-box" style="
                                                        height: 200px;
                                                        overflow: scroll;
                                                        ">
                                                        <div class="message-widget contact-widget">
                                                            <!-- Message -->
                                                            @foreach($langs_en as $key_en => $lang_en)
                                                            <a href="#">
                                                                <div class="mail-contnet">
                                                                    <span class="mail-desc">
                                                                        {{ strip_tags($key_en) }}
                                                                    </span>
                                                                </div>
                                                            </a>
                                                            @endforeach
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                        <div id="language-editor-2">
                                                             </div>    
                                    </div>
                                    
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                          <div class="table-responsive">
                                            <div class="table-header d-flex justify-content-start">
                                                <div class="form-group d-flex">
                                                 <div class="col-sm-1 d-flex">
                                                    <button class="btn waves-effect waves-light btn-info ">Save</button>
                                                </div>
                                                <div class="col-sm-3 d-flex">
                                                    <select class="form-control form-control-line">
                                                        <option>Bulk Actions</option>
                                                        <option>Spam</option>
                                                        <option>Delete</option>
                                                    </select>
                                                    <button class="btn waves-effect waves-light btn-info ">Apply</button>
                                                </div>
                                                <div class="col-sm-3 d-flex">
                                                    <select class="form-control form-control-line">
                                                        <option>All Dates</option>
                                                        <option>September 2017</option>
                                                    </select>
                                                    <button class="btn waves-effect waves-light btn-info ">Sort</button>
                                                </div>
                                                <div class="col-sm-4 d-flex">
                                                  <input type="text" class="form-control" placeholder="search"> 
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card">
                                                    <div class="message-box contact-box" style="
                                                        height: 200px;
                                                        overflow: scroll;
                                                        ">
                                                        <div class="message-widget contact-widget">
                                                            <!-- Message -->
                                                            @foreach($langs_pl as $key => $lang_pl)
                                                            <a href="#">
                                                                <div class="mail-contnet">
                                                                    <span class="mail-desc">
                                                                        {{ strip_tags($key) }}
                                                                    </span>
                                                                </div>
                                                            </a>
                                                            @endforeach
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="language-editor">

                                                </div>
                                        </div>
                                        </div>
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