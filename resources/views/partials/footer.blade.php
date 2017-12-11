 <footer>
        <div class="container-fluid">
            <div class="container">
                <h2 class="hidden">@lang("Podsumowanie")</h2>
                <nav>
                    <h3 class="hidden">@lang("Nawigacja")</h3>
    
                    <ul class="d-flex justify-content-center">
                        <li><a href="{{route('privacy-policy')}}">@lang("POLITYKA PRYWATNOŚCI")</a></li>
                        <li><a href="{{route('terms-and-conditions')}}">@lang("REGULAMIN")</a></li>
                        <li><a href="{{route('contact')}}">@lang("KONTAKT")</a></li>
                    </ul>
                </nav>
    
                <ul id="social" class="d-flex justify-content-center">
                    <li><a href="#"><img src="{{asset('images/fb_ico.jpg')}}" alt="facebook ico" /></a></li>
                    <li><a href="#"><img src="{{asset('images/twitter_ico.jpg')}}" alt="twitter ico" /></a></li>
                    <li><a href="#"><img src="{{asset('images/yt_ico.jpg')}}" alt="youtube ico" /></a></li>
                </ul>
    
                <span>&copy UI8 2015 - SowaJezykowa.pl</span>
            </div>
        </div>
    </footer>