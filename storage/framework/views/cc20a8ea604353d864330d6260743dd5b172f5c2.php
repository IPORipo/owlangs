<?php $__env->startSection('title'); ?>
    Home
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container-fluid" id="faces">
        <h2 class="hidden">Użytkownicy</h2>
        <div class="container">
            <div class="row">
                <div class="col-sm-1 col"><img src="images/twarz1.png" alt="avatar1" /></div>
                <div class="col-sm-1 col"><img src="images/twarz2.png" alt="avatar2" /></div>
                <div class="col-sm-1 col"><img src="images/twarz3.png" alt="avatar3" /></div>
                <div class="col-sm-1 col"><img src="images/twarz4.png" alt="avatar4" /></div>
                <div class="col-sm-1 col"><img src="images/twarz5.png" alt="avatar5" /></div>
                <div class="col-sm-1 col"><img src="images/twarz6.png" alt="avatar6" /></div>
                <div class="col-sm-1 col"><img src="images/twarz1.png" alt="avatar1" /></div>
                <div class="col-sm-1 col"><img src="images/twarz2.png" alt="avatar2" /></div>
                <div class="col-sm-1 col"><img src="images/twarz3.png" alt="avatar3" /></div>
                <div class="col-sm-1 col"><img src="images/twarz4.png" alt="avatar4" /></div>
                <div class="col-sm-1 col"><img src="images/twarz5.png" alt="avatar5" /></div>
                <div class="col-sm-1 col"><img src="images/twarz6.png" alt="avatar6" /></div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="hidden">Schemat nauki</h2>
                    <div id="e-learning">
                        <img id="schemat" src="images/schemat_nauki2.png" alt="schemat nauki" />
                        <span id="tlumacz"><?php echo app('translator')->getFromJson("en.teach & learn"); ?></span>
                        <span id="ucz1"><?php echo app('translator')->getFromJson("en.learn socially"); ?></span>
                        <span id="zdobywaj"><?php echo app('translator')->getFromJson("en.prove yourself"); ?></span>
                        <span id="takich"><?php echo app('translator')->getFromJson("en.learn socially"); ?></span>
                    </div>
                </div>
                <div class="col-md-6">
                      <img id="chmura" src="images/sowachmura2.png" alt="chmura" />

                <h3><?php echo app('translator')->getFromJson("en.Uhu! Uhu!"); ?></h3>
                <p><span><?php echo app('translator')->getFromJson("en.Dołącz do klubu <br> pasjonatów angielskiego!</span> <br> Dziś się zarejestrujesz 30 dni VIP <br>zyskujesz"); ?></span></p>

                <div id="formularz">

                    <button class="loginBtn facebook">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                        <span><?php echo app('translator')->getFromJson("en.Facebook login"); ?></span>
                    </button>
                    <!-- <div class="response"></div> -->

                    <div class="gSignInWrapper">
                        <button id='customBtn1' class="google customGPlusSignIn">
                        <i class="fa fa-google" aria-hidden="true"></i>
                        <span><?php echo app('translator')->getFromJson("en.Google+ login"); ?></span></button>
                    </div>
                    <!-- <div class="name"></div> -->

                    <span id="lub"><?php echo app('translator')->getFromJson("en.lub"); ?></span>
                    <form class='form' method="POST" action="<?php echo e(route('register')); ?>">
                        <?php echo e(csrf_field()); ?>

                        <input id="imie" name = 'name' required placeholder="<?php echo app('translator')->getFromJson('en.Write your name'); ?>">
                        <input id="email" tyle='email' name = 'email' required placeholder="<?php echo app('translator')->getFromJson('en.Write your e-mail'); ?>">
                        <input type="password" name = 'password' required id="haslo" placeholder="<?php echo app('translator')->getFromJson('en.Write your password'); ?>">
                        <button class="btn btn-100 register" type = 'submit'><?php echo app('translator')->getFromJson("en.ZAREJESTRUJ SIĘ"); ?></button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="film">
        <div class="container">
             <h2><?php echo app('translator')->getFromJson("en.above-video"); ?></h2>

            <video controls poster="images/video_poster.jpg">
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="container" id="fts">
            <div class="row">
                <div class="col-sm-4"><img id="ico1" src="images/ico1.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.learn socially"); ?></p></div>
                <div class="col-sm-4"><img id="ico4" src="images/ico4.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Improve your language"); ?></p></div>
                <div class="col-sm-4"><img id="ico7" src="images/ico7.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.prove yourself"); ?></p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico2" src="images/ico2.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Create language courses"); ?></p></div>
                <div class="col-sm-4"><img id="ico5" src="images/ico5.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Meet people just like You"); ?></p></div>
                <div class="col-sm-4"><img id="ico8" src="images/ico8.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Go higher in the rank"); ?></p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico3" src="images/ico3.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Help and ask for help"); ?></p></div>
                <div class="col-sm-4"><img id="ico6" src="images/ico6.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Translate"); ?></p></div>
                <div class="col-sm-4"><img id="ico9" src="images/ico9.png" alt="nauka" /><p><?php echo app('translator')->getFromJson("en.Make money on Your skills"); ?></p></div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-1">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img id="smartphone" src="images/tablet_long.png" alt="smartphone" />
                </div>
                <div class="col-md-6">
                        <?php echo app('translator')->getFromJson("en.banner-1-title"); ?>
                        <br>
                    <p>
                        <?php echo app('translator')->getFromJson("en.banner-1-text"); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                        <?php echo app('translator')->getFromJson("en.banner-2-title"); ?>
                        <br>
                    <p>
                        <?php echo app('translator')->getFromJson("en.banner-2-text"); ?>
                    </p>
                </div>
                <div class="col-md-6">
                    <img id="smartphone" src="images/smartphone.jpg" alt="smartphone" />
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img id="smartphone" src="images/tablet_long.png" alt="smartphone" />
                </div>
                <div class="col-md-6">
                        <?php echo app('translator')->getFromJson("en.banner-3-title"); ?>
                        <br>
                    <p>
                        <?php echo app('translator')->getFromJson("en.banner-3-text"); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                        <?php echo app('translator')->getFromJson("en.banner-4-title"); ?>
                    <p>
                        <?php echo app('translator')->getFromJson("en.banner-4-text"); ?>
                    </p>
                </div>
                <div class="col-md-6">
                    <img id="smartphone" src="images/tablet_long.png" alt="smartphone" />
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="testimonials">
        <h2 class="hidden"><?php echo app('translator')->getFromJson("en.Komentarze"); ?></h2>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                     <p><?php echo app('translator')->getFromJson("en.feedback-1"); ?></p>
                    <span>Adam , <?php echo app('translator')->getFromJson("en.teacher"); ?></span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p><?php echo app('translator')->getFromJson("en.feedback-2"); ?></p>
                    <span>Adam , <?php echo app('translator')->getFromJson("en.bartender"); ?></span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                    <p><?php echo app('translator')->getFromJson("en.feedback-3"); ?></p>
                    <span>Adam , <?php echo app('translator')->getFromJson("en.teacher"); ?></span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p><?php echo app('translator')->getFromJson("en.feedback-4"); ?></p>
                    <span>Adam , <?php echo app('translator')->getFromJson("en.bartender"); ?></span>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>