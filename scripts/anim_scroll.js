/**
 * Created by monika on 11.01.16.
 */
var win_h=$(window).height();
function addViewPortClass(){
    $('.animate').each(function(){
        var r=this.getBoundingClientRect();
        if (r.top<win_h && r.bottom>0){
            $(this).addClass("viewPort")
        }
    });
}

var main=function(){
    addViewPortClass();
    $(window).scroll(function(){
        addViewPortClass()
    });
};
$(document).ready(main);


var win_h1=$(window).height();
function addViewPortClass1(){
    $('.animate_outside').each(function(){
        var x=this.getBoundingClientRect();
        if (x.top<win_h1 && x.bottom>0){
            $(this).addClass("viewPort1")
        }
    });
}

var main1=function(){
    addViewPortClass1();
    $(window).scroll(function(){
        addViewPortClass1()
    });
};
$(document).ready(main1);

