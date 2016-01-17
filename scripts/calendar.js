/**
 * Created by monika on 13.01.16.
 */
$(document).ready(function() {
    var intervalNumber;
    var displayTime;
    var icons=["white-kosz.png", "white-mic .png", "white-popcorn.png", "white-share.png", "white-tel.png",
        "white-kosz.png", "white-mic .png", "white-popcorn.png", "white-share.png", "white-tel.png"];
    var visibleIcons;   /* number of visible icons */

    $('.my img').last().click(function () {
        $('.game-intro').css("display", "block");
    });
    $('.cancel-button').click(function () {
        $('.game-intro').css("display", "none");
    });
    $('.game-button').click(function () {
        visibleIcons = 0;
        $('.game-intro').css("display", "none");
        $(".pop-up").fadeIn(1000);
        $(".gameClose").show();
        var days=getDays();
        for (i=0; i < days.length; i++){
            $("#"+days[i]).attr("src", "images/new/"+icons[i]);
            $("#"+days[i]).show();
            visibleIcons += 1;
        }

    });

    // timer
    $('.game-button').click(function (){
        intervalNumber = setInterval(countTimer, 1000);
        var totalSeconds = 0;
        if (visibleIcons === 0) return;     /* game is over, timer stopped */
        function countTimer() {
            ++totalSeconds;
            var hour = Math.floor(totalSeconds /3600);
            var minute = Math.floor((totalSeconds - hour*3600)/60);
            var seconds = totalSeconds - (hour*3600 + minute*60);
            $('.timer').html("Twój czas: " + hour + " h " + ": " + minute + " m " + ": " + seconds + " s ");
            //$('.timer').html(hour +  minute + seconds);
        }
    });

    $(".gameClose, .game-over").click(function () {
        /* clean up and hide game window */
        $('.game-over').hide();
        $('.gameIcon').hide();
        clearInterval(intervalNumber);
        $('.timer').html("");
        $(".pop-up").fadeOut(500);
    });

    /* handler for hiding icons in calendar  */
    $(".gameIcon").click(function () {
        visibleIcons -= 1;
        $(this).hide();
        if(visibleIcons === 0) {
            clearInterval(intervalNumber);
            $('.game-over').show();
        }
    });
   });

//get list of 10 random days
function getDays(){
    var days=[];
    while (days.length < 10){
       var day=(Math.floor(Math.random()*29)+1);
       if (days.indexOf(day) == -1){
        days.push(day);
    }
   }
    return days;
}

