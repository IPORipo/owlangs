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
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                        <span>@lang("Wejdź przez Facebook")</span>
                    </button>
                    <!-- <div class="response"></div> -->

                    <div class="gSignInWrapper">
                        <button id='customBtn1' class="google customGPlusSignIn">
                        <i class="fa fa-google" aria-hidden="true"></i>
                        <span>@lang("Wejdź przez Google+")</span></button>
                    </div>
                    <!-- <div class="name"></div> -->

                    <span id="lub">@lang("lub")</span>
                    <form class='form' method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}
                        <input id="imie" name = 'name' required placeholder="Wpisz swoje imię">
                        <input id="email" tyle='email' name = 'email' required placeholder="Wpisz swój e-mail">
                        <input type="password" name = 'password' required id="haslo" placeholder="Wpisz swoje hasło">
                        <button class="btn btn-100 register" type = 'submit'>@lang("ZAREJESTRUJ SIĘ")</button>
                    </form>
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
        <div class="container" id="fts">
            <div class="row">
                <div class="col-sm-4"><img id="ico1" src="images/ico1.png" alt="nauka" /><p>@lang("Ucz się i nauczaj")</p></div>
                <div class="col-sm-4"><img id="ico4" src="images/ico4.png" alt="nauka" /><p>@lang("Szlifuj język")</p></div>
                <div class="col-sm-4"><img id="ico7" src="images/ico7.png" alt="nauka" /><p>@lang("Zdobywaj nagrody")</p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico2" src="images/ico2.png" alt="nauka" /><p>@lang("Twórz autorskie kursy językowe")</p></div>
                <div class="col-sm-4"><img id="ico5" src="images/ico5.png" alt="nauka" /><p>@lang("Poznawaj ludzi takich jak Ty")</p></div>
                <div class="col-sm-4"><img id="ico8" src="images/ico8.png" alt="nauka" /><p>@lang("Pnij się po szczeblach rankingu")</p></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><img id="ico3" src="images/ico3.png" alt="nauka" /><p>@lang("Pomagaj i proś o pomoc")</p></div>
                <div class="col-sm-4"><img id="ico6" src="images/ico6.png" alt="nauka" /><p>@lang("Tłumacz teksty")</p></div>
                <div class="col-sm-4"><img id="ico9" src="images/ico9.png" alt="nauka" /><p>@lang("Zarabiaj na swoich umiejętnościach")</p></div>
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
                    <h3> @lang("Pierwsze na świecie")</h3>
                     <span>
                        @lang("kursy online tworzone dla Ciebie<br>INDYWIDUALNIE!!!")
                    </span>
                    <p>
                        @lang("Zapomnij o masowych kursach elearningowych, które nijak się mają do Twoich potrzeb. Korepetytorzy sowiej społeczności będą tworzyć specjalnie dla Ciebie tylko te szkolenia i zadania do wykonania, które są Ci w danej chwili najbardziej potrzebne.")
                    </p>
                    <p>@lang("Te rewolucyjne podejście jest możliwe dzięki zaawansowanym narzędziom do kreacji szkoleń oraz metodom badania profilu ucznia udostępnionej każdemu korepetytorowi. Dzięki temu Twoja nauka stanie się szybsza. efektywniejsza i przyjemniejsza.")</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3> @lang("Pierwsze na świecie")</h3>
                    <span>
                        @lang("kursy online tworzone dla Ciebie<br>INDYWIDUALNIE!!!")
                    </span>
                    <p>
                        @lang("Zapomnij o masowych kursach elearningowych, które nijak się mają do Twoich potrzeb. Korepetytorzy sowiej społeczności będą tworzyć specjalnie dla Ciebie tylko te szkolenia i zadania do wykonania, które są Ci w danej chwili najbardziej potrzebne.")
                    </p>
                    <p>@lang("Te rewolucyjne podejście jest możliwe dzięki zaawansowanym narzędziom do kreacji szkoleń oraz metodom badania profilu ucznia udostępnionej każdemu korepetytorowi. Dzięki temu Twoja nauka stanie się szybsza. efektywniejsza i przyjemniejsza.")</p>
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
                    <h3> @lang("Pierwsze na świecie")</h3>
                     <span>
                        @lang("kursy online tworzone dla Ciebie<br>INDYWIDUALNIE!!!")
                    </span>
                    <p>
                        @lang("Zapomnij o masowych kursach elearningowych, które nijak się mają do Twoich potrzeb. Korepetytorzy sowiej społeczności będą tworzyć specjalnie dla Ciebie tylko te szkolenia i zadania do wykonania, które są Ci w danej chwili najbardziej potrzebne.")
                    </p>
                    <p>@lang("Te rewolucyjne podejście jest możliwe dzięki zaawansowanym narzędziom do kreacji szkoleń oraz metodom badania profilu ucznia udostępnionej każdemu korepetytorowi. Dzięki temu Twoja nauka stanie się szybsza. efektywniejsza i przyjemniejsza.")</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid infos" id="info-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3> @lang("Pierwsze na świecie")</h3>
                    <span>
                        @lang("kursy online tworzone dla Ciebie<br>INDYWIDUALNIE!!!")
                    </span>
                    <p>
                        @lang("Zapomnij o masowych kursach elearningowych, które nijak się mają do Twoich potrzeb. Korepetytorzy sowiej społeczności będą tworzyć specjalnie dla Ciebie tylko te szkolenia i zadania do wykonania, które są Ci w danej chwili najbardziej potrzebne.")
                    </p>
                    <p>@lang("Te rewolucyjne podejście jest możliwe dzięki zaawansowanym narzędziom do kreacji szkoleń oraz metodom badania profilu ucznia udostępnionej każdemu korepetytorowi. Dzięki temu Twoja nauka stanie się szybsza. efektywniejsza i przyjemniejsza.")</p>
                </div>
                <div class="col-md-6">
                    <img id="smartphone" src="images/tablet_long.png" alt="smartphone" />
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="testimonials">
        <h2 class="hidden">@lang("Komentarze")</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                     <p>@lang("Nigdy nie lubiłem się uczyć angielskiego. Do czasu odkrycia sowy językowej, gdzie mogę wypełniać pasjonujące questy i zadania jak w rasowej grze RPG")</p>
                    <span>@lang("Adam, nauczyciel")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p>@lang("Szczerze mówiąc, nie wierzyłem, że w jednym miejscu rozwiąże wszystkie swoje problemy językowe. Po pierwszym logowaniu prawda okazała się lepsza od obietnic.")</p>
                    <span>@lang("Adam, barman")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz1_big.png" alt="avatar3" />
                    <p>@lang("Nigdy nie lubiłem się uczyć angielskiego. Do czasu odkrycia sowy językowej, gdzie mogę wypełniać pasjonujące questy i zadania jak w rasowej grze RPG")</p>
                    <span>@lang("Adam, nauczyciel")</span>
                </div>
                <div class="col-md-3">
                    <img src="images/twarz2_big.png" alt="avatar4" />
                    <p>@lang("Szczerze mówiąc, nie wierzyłem, że w jednym miejscu rozwiąże wszystkie swoje problemy językowe. Po pierwszym logowaniu prawda okazała się lepsza od obietnic.")</p>
                    <span>@lang("Adam, barman")</span>
                </div>
            </div>
        </div>
    </div>
@endsection