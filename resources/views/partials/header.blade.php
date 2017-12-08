    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand" href="#">
                <img src="{{ asset('images/logo.png') }}" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse mr-auto d-flex justify-content-end" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="@lang('test')" aria-label="Search">
                  <input class="form-control mr-sm-2" type="search" placeholder="@lang('password')" aria-label="Search">
                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">@lang('login')</button>
                </form>
                <div class="dropdown show">
                    @if(App::isLocale('en'))
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EN
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="/pl">PL</a>
                        </div>
                    @else
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PL
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="/en">EN</a>
                        </div>
                    @endif
                    </div>
            </div>
        </div>
        </nav>
                
    </header>
