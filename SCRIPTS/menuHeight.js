/**
 * Created by kristo on 05.01.16.
 */
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $(".topNavBar").addClass("narrowMenu");
            }
        else {
            $(".topNavBar").removeClass("narrowMenu");
        }
    });
});