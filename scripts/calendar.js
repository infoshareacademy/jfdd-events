/**
 * Created by monika on 13.01.16.
 */
$(document).ready(function() {

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
