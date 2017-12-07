    <header>
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <img src="{{ asset('images/logo.png') }}" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="@lang('test')" aria-label="Search">
                  <input class="form-control mr-sm-2" type="search" placeholder="@lang('password')" aria-label="Search">
                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">@lang('login')</button>
                </form>
            </div>
        </nav>
                
    </header>
