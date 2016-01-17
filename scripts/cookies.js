(function () {

        var container = document.createElement('div'),
            link = document.createElement('a');


// dodanie atrybutów, klas, id i HTML
        container.setAttribute('id', 'cookieinfo');
        container.setAttribute('class', 'cookie-alert');
        container.innerHTML =
            '<div class="row"><h6 class="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ta strona wykorzystuje pliki cookie</h6><p class="col-xs-12 col-sm-12 col-md-7' +
            ' col-lg-8">Używamy informacji zapisanych za pomocą plików cookies. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies ' +
            'kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące ' +
            'plików cookies możesz zmienić w swojej przeglądarce.</p></div>';

        link.setAttribute('href', '#');
        link.setAttribute('title', 'Zamknij');
        link.innerHTML = 'x';


// przycisk zamykający komunikat
        function clickHandler(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }


            // ostylowanie zamykającego się komunikatu
            container.setAttribute('style', 'opacity: 1');

            var interval = window.setInterval(function () {
                container.style.opacity -= 0.01;

                if (container.style.opacity <= 0.02) {
                    document.body.removeChild(container);
                    window.clearInterval(interval);
                }
            }, 4);
        }

        if (link.addEventListener) {
            link.addEventListener('click', clickHandler);
        } else {
            link.attachEvent('onclick', clickHandler);
        }

        container.appendChild(link);
        document.body.appendChild(container);

        return true;
    })();