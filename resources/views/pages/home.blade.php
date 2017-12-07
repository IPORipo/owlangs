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
                        <span id="tlumacz">@lang("tłumacz")</span>
                        <span id="ucz1">@lang("ucz się i nauczaj")</span>
                        <span id="zdobywaj">@lang("zdobywaj nagrody")</span>
                        <span id="takich">@lang("takich jak Ty")</span>
                    </div>
                </div>
                <div class="col-md-6">
                      <img id="chmura" src="images/sowachmura2.png" alt="chmura" />

                <h3>@lang("Uhu! Uhu!")</h3>
                <p><span>@lang("Dołącz do klubu <br> pasjonatów angielskiego!</span> <br> Dziś się zarejestrujesz 30 dni VIP <br>zyskujesz")</span></p>

                <div id="formularz">

                    <button class="loginBtn facebook">
                        <img src="images/facebook.png" alt="fb" />
                        <span>@lang("Wejdź przez Facebook")</span>
                    </button>
                    <!-- <div class="response"></div> -->

                    <div class="gSignInWrapper">
                        <button id='customBtn1' class="google customGPlusSignIn"><img src="imgages/gplus.png" alt="google plus" /><span>@lang("Wejdź przez Google+")</span></button>
                    </div>
                    <!-- <div class="name"></div> -->

                    <span>@lang("lub")</span>
                    <div class='form'>
                        <input id="imie" required placeholder="Wpisz swoje imię">
                        <input id="email" tyle='email' required placeholder="Wpisz swój e-mail">
                        <input type="password" required id="haslo" placeholder="Wpisz swoje hasło">
                        <button class="btn btn-100 register">@lang("ZAREJESTRUJ SIĘ")</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="film">
        <div class="container">
             <h2>@lang("<span>Zostań sową językową</span> i baw się jak nigdy w życiu!")</h2>

            <video controls poster="images/video_poster.jpg">
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4"><img id="ico1" src="images/ico1.png" alt="nauka" />@lang("Ucz się i nauczaj")</div>
                <div class="col-sm-4"><img id="ico4" src="images/ico4.png" alt="nauka" />@lang("Szlifuj język")</div>
                <div class="col-sm-4"><img id="ico7" src="images/ico7.png" alt="nauka" />@lang("Zdobywaj nagrody")</div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico2" src="images/ico2.png" alt="nauka" />@lang("Twórz autorskie kursy językowe")</div>
                <div class="col-sm-4"><img id="ico5" src="images/ico5.png" alt="nauka" />@lang("Poznawaj ludzi takich jak Ty")</div>
                <div class="col-sm-4"><img id="ico8" src="images/ico8.png" alt="nauka" />@lang("Pnij się po szczeblach rankingu")</div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico3" src="images/ico3.png" alt="nauka" />@lang("Pomagaj i proś o pomoc")</div>
                <div class="col-sm-4"><img id="ico6" src="images/ico6.png" alt="nauka" />@lang("Tłumacz teksty")</div>
                <div class="col-sm-4"><img id="ico9" src="images/ico9.png" alt="nauka" />@lang("Zarabiaj na swoich umiejętnościach")</div>
            </div>
        </div>
    </div>
@endsection