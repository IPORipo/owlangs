@extends('layouts.master')

@section('title')
    Home
@endsection

@section('content')
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
                        <span id="tlumacz">@lang("en.teach & learn")</span>
                        <span id="ucz1">@lang("en.learn socially")</span>
                        <span id="zdobywaj">@lang("en.prove yourself")</span>
                        <span id="takich">@lang("en.learn socially")</span>
                    </div>
                </div>
                <div class="col-md-6">
                      <img id="chmura" src="images/sowachmura2.png" alt="chmura" />

                <h3>@lang("en.Uhu! Uhu!")</h3>
                <p><span>@lang("en.Dołącz do klubu <br> pasjonatów angielskiego!</span> <br> Dziś się zarejestrujesz 30 dni VIP <br>zyskujesz")</span></p>

                <div id="formularz">

                    <button class="loginBtn facebook">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                        <span>@lang("en.Facebook login")</span>
                    </button>
                    <!-- <div class="response"></div> -->

                    <div class="gSignInWrapper">
                        <button id='customBtn1' class="google customGPlusSignIn">
                        <i class="fa fa-google" aria-hidden="true"></i>
                        <span>@lang("en.Google+ login")</span></button>
                    </div>
                    <!-- <div class="name"></div> -->

                    <span id="lub">@lang("en.lub")</span>
                    <form class='form' method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}
                        <input id="imie" name = 'name' required placeholder="@lang('en.Write your name')">
                        <input id="email" tyle='email' name = 'email' required placeholder="@lang('en.Write your e-mail')">
                        <input type="password" name = 'password' required id="haslo" placeholder="@lang('en.Write your password')">
                        <button class="btn btn-100 register" type = 'submit'>@lang("en.ZAREJESTRUJ SIĘ")</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="film">
        <div class="container">
             <h2>@lang("en.above-video")</h2>

            <video controls poster="images/video_poster.jpg">
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="container" id="fts">
            <div class="row">
                <div class="col-sm-4"><img id="ico1" src="images/ico1.png" alt="nauka" /><p>@lang("en.learn socially")</p></div>
                <div class="col-sm-4"><img id="ico4" src="images/ico4.png" alt="nauka" /><p>@lang("en.Improve your language")</p></div>
                <div class="col-sm-4"><img id="ico7" src="images/ico7.png" alt="nauka" /><p>@lang("en.prove yourself")</p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico2" src="images/ico2.png" alt="nauka" /><p>@lang("en.Create language courses")</p></div>
                <div class="col-sm-4"><img id="ico5" src="images/ico5.png" alt="nauka" /><p>@lang("en.Meet people just like You")</p></div>
                <div class="col-sm-4"><img id="ico8" src="images/ico8.png" alt="nauka" /><p>@lang("en.Go higher in the rank")</p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico3" src="images/ico3.png" alt="nauka" /><p>@lang("en.Help and ask for help")</p></div>
                <div class="col-sm-4"><img id="ico6" src="images/ico6.png" alt="nauka" /><p>@lang("en.Translate")</p></div>
                <div class="col-sm-4"><img id="ico9" src="images/ico9.png" alt="nauka" /><p>@lang("en.Make money on Your skills")</p></div>
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
                        @lang("en.banner-1-title")
                        <br>
                    <p>
                        @lang("en.banner-1-text")
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                        @lang("en.banner-2-title")
                        <br>
                    <p>
                        @lang("en.banner-2-text")
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
                        @lang("en.banner-3-title")
                        <br>
                    <p>
                        @lang("en.banner-3-text")
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                        @lang("en.banner-4-title")
                    <p>
                        @lang("en.banner-4-text")
                    </p>
                </div>
                <div class="col-md-6">
                    <img id="smartphone" src="images/tablet_long.png" alt="smartphone" />
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="testimonials">
        <h2 class="hidden">@lang("en.Komentarze")</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                     <p>@lang("en.feedback-1")</p>
                    <span>Adam , @lang("en.teacher")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p>@lang("en.feedback-2")</p>
                    <span>Adam , @lang("en.bartender")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                    <p>@lang("en.feedback-3")</p>
                    <span>Adam , @lang("en.teacher")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p>@lang("en.feedback-4")</p>
                    <span>Adam , @lang("en.bartender")</span>
                </div>
            </div>
        </div>
    </div>
@endsection