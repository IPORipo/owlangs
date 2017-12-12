<?php $__env->startSection('title'); ?>
  Users
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
                                                <th><a href="<?php echo e(route('users','desc')); ?>">#</a></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Registered</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <td> <?php echo e($key+1); ?></td>
                                            <td> <?php echo e($user->name); ?></td>
                                            <td> <?php echo e($user->email); ?></td>
                                              <?php if($user->role_id = 1): ?> 
                                                <td>Admin</td>
                                                <?php else: ?> 
                                                <td>User</td>
                                              <?php endif; ?>
                                            <td> <?php echo e($user->created_at); ?></td>
                                          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>