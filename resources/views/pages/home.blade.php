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
                        <span id="tlumacz">@langs("tłumacz")</span>
                        <span id="ucz1">@langs("ucz się i nauczaj")</span>
                        <span id="zdobywaj">@langs("zdobywaj nagrody")</span>
                        <span id="takich">@langs("takich jak Ty")</span>
                    </div>
                </div>
                <div class="col-md-6">
                      <img id="chmura" src="images/sowachmura2.png" alt="chmura" />

                <h3>@langs("Uhu! Uhu!")</h3>
                <p><span>@langs("Dołącz do klubu <br> pasjonatów angielskiego!</span> <br> Dziś się zarejestrujesz 30 dni VIP <br>zyskujesz")</span></p>

                <div id="formularz">

                    <button class="loginBtn facebook">
                        <img src="images/facebook.png" alt="fb" />
                        <span>@langs("Wejdź przez Facebook")</span>
                    </button>
                    <!-- <div class="response"></div> -->

                    <div class="gSignInWrapper">
                        <button id='customBtn1' class="google customGPlusSignIn"><img src="imgages/gplus.png" alt="google plus" /><span>@langs("Wejdź przez Google+")</span></button>
                    </div>
                    <!-- <div class="name"></div> -->

                    <span>@langs("lub")</span>
                    <div class='form'>
                        <input id="imie" required placeholder="Wpisz swoje imię">
                        <input id="email" tyle='email' required placeholder="Wpisz swój e-mail">
                        <input type="password" required id="haslo" placeholder="Wpisz swoje hasło">
                        <button class="btn btn-100 register">@langs("ZAREJESTRUJ SIĘ")</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
@endsection