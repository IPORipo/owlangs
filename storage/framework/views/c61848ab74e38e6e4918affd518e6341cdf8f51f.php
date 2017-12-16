    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand" href="<?php echo e(route('home')); ?>">
                <img src="<?php echo e(asset('images/logo.png')); ?>" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse mr-auto d-flex justify-content-end" id="navbarSupportedContent">

                <?php if(!Auth::check()): ?>
                <form class="form-inline my-2 my-lg-0" method="POST" action="<?php echo e(route('login')); ?>">
                    <?php echo e(csrf_field()); ?>

                    <input class="form-control mr-sm-2" name = 'email'  type="email" placeholder="<?php echo app('translator')->getFromJson('test'); ?>">
                    <input type='password' class="form-control mr-sm-2" name = 'password' placeholder="<?php echo app('translator')->getFromJson('password'); ?>">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><?php echo app('translator')->getFromJson('login'); ?></button>
                </form>
                <?php else: ?>
                <form class="form-inline my-2 my-lg-0" method="POST" style = "padding-top:2px" action="<?php echo e(route('logout')); ?>">
                    <?php echo e(csrf_field()); ?>

                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><?php echo app('translator')->getFromJson('en.logout'); ?></button>
                </form>
                <?php if(Auth::user()->role_id == 1 ): ?>
                <form action="<?php echo e(route('admin')); ?>" method="get"  style = "margin-left:10px">
                        <button id="adminbutton" class="btn btn-outline-success my-2 my-sm-0" > <?php echo app('translator')->getFromJson('admin'); ?></button>
                </form>
                <?php endif; ?>
                <?php endif; ?>
                <div class="dropdown show">
                    <?php if(App::isLocale('en')): ?>
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="/pl">PL</a>
                        </div>
                    <?php else: ?>
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PL
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="/en">EN</a>
                        </div>
                    <?php endif; ?>
                    </div>
            </div>
        </div>
        </nav>
                
    </header>
