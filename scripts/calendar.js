/**
 * Created by monika on 13.01.16.
 */
$(document).ready(function() {

    $(".gameStart").click(function () {
        $(".gameBackground").fadeIn(500, function () {
            $(".pop-up").show(1000);
            $(".gameClose").show();

        });
    });
    $(".gameClose").click(function () {
        $(".gameClose").hide();
        $(".pop-up").hide(500, function () {
            $(".gameBackground").fadeOut(500);
        });
    });
    $(".gameBackground").click(function () {
        $(".gameClose").hide();
        $(".pop-up").hide(500, function () {
            $(".gameBackground").fadeOut(500);
        });
    });
});

////losowanie liczby z zakresu 1-29
//var x=1+Math.floor(Math.random()*15)
//
//for(x=1; x<=29; x++){
//    console.log(x)
//}