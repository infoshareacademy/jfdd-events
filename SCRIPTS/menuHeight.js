/**
 * Created by kristo on 05.01.16.
 */
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            $(".topNavBar, .socialIconsInNavBar, ul.topNavBar").addClass("narrowingMenu");
            $(".topNavBar, .socialIconsInNavBar, ul.topNavBar").removeClass("wideningMenu");
            }
        else {
            $(".topNavBar, .socialIconsInNavBar, ul.topNavBar").addClass("wideningMenu");
            $(".topNavBar, .socialIconsInNavBar, ul.topNavBar").removeClass("narrowMenu");
        }
    });
});