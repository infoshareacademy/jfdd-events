/**
 * Created by michal on 07.01.16.
 */
/*
function scroll_to('#naglowek_onas') {
    $('html,body').animate({scrollTop: $('#naglowek_onas').offset().top}, 1000);
    return false;
}
*/
$(function () {
    $("a[href='#naglowek_onas']").click(function() {
        debugger;
        var offset = $("#naglowek_onas").offset().top;
        $('html,body').animate({
            scrollTop: offset
        }, 'slow');
        return false;
    });
    $("a[href='#header_anchor']").click(function() {
        debugger;
        var offset = $("#header_anchor").offset().top;
        $('html,body').animate({
            scrollTop: offset
        }, 'slow');
        return false;
    });
    $("a[href='#event_anchor']").click(function() {
        debugger;
        var offset = $("#event_anchor").offset().top;
        $('html,body').animate({
            scrollTop: offset
        }, 'slow');
        return false;
    });
    $("a[href='#zajawka']").click(function() {
        debugger;
        var offset = $("#zajawka").offset().top;
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
});
