/**
 * Created by klos on 10.01.2016.
 */

$(document).ready(function(){

    var introImage = document.getElementById('intro');


    $(window).on('scroll load', function () {
        var actualSitePosition = $(window).scrollTop();
        introImage.style.backgroundPositionY = 70 -actualSitePosition * 0.4 +'px';
    });


});