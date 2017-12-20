<?php $__env->startSection('title'); ?>
   Translations
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
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
                <!--                         Start Page Content -->
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
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#translate" role="tab" aria-controls="profile" aria-selected="false">Translate</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div class="table-responsive">
                                            <div class="table-header d-flex justify-content-start">
                                                <div class="form-group d-flex">
                                                <div class="col-sm-3 d-flex">
                                                    <button class="btn waves-effect waves-light btn-info " id="save-btn">Save</button>
                                                    <?php echo e(csrf_field()); ?>

                                                </div>
                                                <div class="col-sm-8 d-flex">
                                                  <input type="text" id="saerch-text" class="form-control" placeholder="search">
                                                </div>
                                            </div>
                                            </div>
                                            <div class="message-box contact-box" id="english-langs" style="
                                                        height: 400px;
                                                        overflow: scroll;
                                                        ">
                                                        <div class="message-widget contact-widget">
                                                                  
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>  
                                        <div class="tab-pane fade" id="translate" role="tabpanel" aria-labelledby="profile-tab">
                                            <div id="english-box" class="card" ></div>
                                            <div id="poland-box" class="card"></div>
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

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>