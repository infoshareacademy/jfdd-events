/**
 * Created by jakubklos on 05.01.16.
 */

$(document).ready(function(){


    var lastId,
        topMenu = $(".navButtons"),
        topMenuHeight = topMenu.outerHeight()-35,

        menuItems = topMenu.find("a"),

        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });


    $(window).scroll(function() {

        var fromTop = $(this).scrollTop()+topMenuHeight;

        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }
    });

});
