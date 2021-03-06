<?php $__env->startSection('title'); ?>
    Contact
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container-fluid" id="contact-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6 contact-form-block">  
                    <h1>Contact Us</h1>  
                    <form action="<?php echo e(route('addcontact')); ?>" method="GET">

                        <input type="name" name="name" class="form-control" placeholder="<?php echo app('translator')->getFromJson('name'); ?>">
                        <input type="email" name="email" class="form-control" placeholder="<?php echo app('translator')->getFromJson('email'); ?>">
                        <input type="text" name="subject" class="form-control" placeholder="<?php echo app('translator')->getFromJson('subject'); ?>">
                        <textarea name="msg" id="" class="form-control" cols="30" rows="10" placeholder="<?php echo app('translator')->getFromJson('message'); ?>"></textarea>
                        <input type="submit" class="btn btn-primary">
                    </form>
                </div>
                <div class="col-md-6 contact-info-block">
                    <h4><span><?php echo app('translator')->getFromJson('en.Company name'); ?></span>: <?php echo e($contact['company-name']); ?>.</h4>
                    <h4><span><?php echo app('translator')->getFromJson('en.address'); ?></span>: <?php echo e($contact['address']); ?></h4>
                    <img src="<?php echo e(asset('images/center.jpg')); ?>" alt="">
                    <h4>NIP/tax <?php echo app('translator')->getFromJson('en.identification number'); ?>: <strong><?php echo e($contact['tax']); ?></strong></h4>
                    <h4><?php echo app('translator')->getFromJson('en.How to contact us'); ?>:<br><?php echo app('translator')->getFromJson('en.phone'); ?>: <strong><?php echo e($contact['phone']); ?></strong><br>email: <strong><a href="mailto:office@newfuture.company"><?php echo e($contact['admin-mail']); ?></a></strong>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9835876111247!2d17.03593531565198!3d51.108762979571715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27653413449%3A0x6facac676125681a!2zS3Jhd2llY2thIDMsIDUwLTE0OCBXcm9jxYJhdywg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sge!4v1512736102276" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>