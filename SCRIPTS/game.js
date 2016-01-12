/**
 * Created by kristo on 11.01.16.
 */

$(document).ready(function() {
    $('.my img').last().click(function() {
        $('.game-intro').css("display", "block");
    });
    $('.cancel-button').click(function() {
        $('.game-intro').css("display", "none");
    });
    $('.game-button').click(function() {
        $('.game-intro').css("display", "none");
        $('.game-board').css("display", "block");
    });
});