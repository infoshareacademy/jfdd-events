/**
 * Created by kristo on 05.01.16.
 */
$(document).ready(function(){

    var importedClasses =  $(".topNavBar, .topNavBar img, .socialIconsInNavBar, ul.navButtons li, .formButtonInMenu");

    $(window).scroll(function() {
        if ($(document).scrollTop() > 436) {
            importedClasses.addClass("narrowingMenu");
            importedClasses.removeClass("wideningMenu");
            }
        else {
            importedClasses.removeClass("narrowingMenu");
            importedClasses.addClass("wideningMenu");
        }
    });
});