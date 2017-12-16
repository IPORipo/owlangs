 <footer>
        <div class="container-fluid">
            <div class="container">
                <h2 class="hidden"><?php echo app('translator')->getFromJson("Podsumowanie"); ?></h2>
                <nav>
                    <h3 class="hidden"><?php echo app('translator')->getFromJson("Nawigacja"); ?></h3>
    
                    <ul class="d-flex justify-content-center">
                        <li><a href="<?php echo e(route('privacy-policy')); ?>"><?php echo app('translator')->getFromJson("en.privacy policy"); ?></a></li>
                        <li><a href="<?php echo e(route('terms-and-conditions')); ?>"><?php echo app('translator')->getFromJson("terms and conditions"); ?></a></li>
                        <li><a href="<?php echo e(route('usercontact')); ?>"><?php echo app('translator')->getFromJson("contact"); ?></a></li>
                    </ul>
                </nav>
    
                <ul id="social" class="d-flex justify-content-center">
                    <li><a href="#"><img src="<?php echo e(asset('images/fb_ico.jpg')); ?>" alt="facebook ico" /></a></li>
                    <li><a href="#"><img src="<?php echo e(asset('images/twitter_ico.jpg')); ?>" alt="twitter ico" /></a></li>
                    <li><a href="#"><img src="<?php echo e(asset('images/yt_ico.jpg')); ?>" alt="youtube ico" /></a></li>
                </ul>
    
                <span>&copy UI8 2015 - SowaJezykowa.pl</span>
            </div>
        </div>
    </footer>