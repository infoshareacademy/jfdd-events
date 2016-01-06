/**
 * Created by kristo on 05.01.16.
 */
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $("#topNavBar").animate({height: "50px"},"slow");
            $("#logoInNavBar").css("padding-top", "5px");
            $("div#socialIconsInNavBar").css("margin-top", "-15px");
            $("li").css("padding-top", "-5px");
            }
        else {
            $("#topNavBar").animate({height: "70px"},"slow");
        }
    });
});