/**
 * Created by monika on 13.01.16.
 */
$(document).ready(function() {
    var intervalNumber;
    var numberOfIcons;
    var icons=["child.png", "cinema.png", "concert.png", "sport.png", "theatre.png", "child.png", "cinema.png", "concert.png", "sport.png", "theatre.png"];

    $('.my img').last().click(function () {
        $('.game-intro').css("display", "block");
    });
    $('.cancel-button').click(function () {
        $('.game-intro').css("display", "none");
    });
    $('.game-button').click(function () {
        $('.game-intro').css("display", "none");
        $(".pop-up").show(1000);
        $(".gameClose").show();
        var days=getDays();
        for (i=0; i<days.length; i++){
            $("#"+days[i]).attr("src","images/"+icons[i]);
            $("#"+days[i]).show();
        }
        numberOfIcons = icons.length;
    });
    // timer
    $('.game-button').click(function (){
        intervalNumber = setInterval(countTimer, 1000);
        var totalSeconds = 0;
        function countTimer() {
            ++totalSeconds;
            var hour = Math.floor(totalSeconds /3600);
            var minute = Math.floor((totalSeconds - hour*3600)/60);
            var seconds = totalSeconds - (hour*3600 + minute*60);

            $('.timer').html("Twój wynik: " + hour + ":" + minute + ":" + seconds);
        }
    });

    $(".gameClose").click(function () {
        $(".gameClose").hide();
        $(".pop-up").hide(500);
    });

    /* handler for hiding icons in calendar  */
    $(".gameIcon").click(function () {
        numberOfIcons -= 1;
        $(this).hide();
        if(numberOfIcons === 0) {
            clearInterval(intervalNumber);
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
    return days
}

